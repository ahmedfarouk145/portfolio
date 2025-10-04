import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Award, CheckCircle2, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  logo: string;
  date: string;
  skills: string[];
  verifyLink?: string;
  color: string;
}

export function CertificationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications: Certification[] = [
    {
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta (Facebook)',
      logo: '🎯',
      date: '2024',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX', 'Responsive Design'],
      color: 'from-blue-600 to-blue-800'
    },
    {
      title: 'IBM Full-Stack JavaScript Developer Professional Certificate',
      issuer: 'IBM',
      logo: '💼',
      date: '2024',
      skills: ['Node.js', 'Express', 'MongoDB', 'React', 'DevOps'],
      color: 'from-indigo-600 to-purple-700'
    },
    {
      title: 'Meta React Native Specialization',
      issuer: 'Meta (Facebook)',
      logo: '📱',
      date: '2024',
      skills: ['React Native', 'Mobile Development', 'iOS', 'Android', 'Cross-Platform'],
      color: 'from-cyan-600 to-blue-700'
    },
    {
      title: 'IBM Developing Mobile Apps with React Native Specialization',
      issuer: 'IBM',
      logo: '🚀',
      date: '2024',
      skills: ['React Native', 'Mobile UI', 'API Integration', 'State Management'],
      color: 'from-purple-600 to-pink-700'
    }
  ];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F46E5]/10 text-[#4F46E5] rounded-full text-sm mb-4"
          >
            <Award className="w-4 h-4" />
            <span>Professional Credentials</span>
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">Certifications & Achievements</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Industry-recognized certifications from leading tech companies
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                rotateY: 2,
                transition: { duration: 0.3 }
              }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4">
                    {/* Logo */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-3xl shadow-lg`}
                    >
                      {cert.logo}
                    </motion.div>

                    <div>
                      <h3 className="text-xl text-gray-900 mb-2 group-hover:text-[#4F46E5] transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {/* Date badge */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-gradient-to-r from-[#4F46E5]/10 to-purple-600/10 text-[#4F46E5] text-sm rounded-full border border-[#4F46E5]/20"
                  >
                    {cert.date}
                  </motion.div>
                </div>

                {/* Skills */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-3">Skills Acquired:</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.15 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-lg hover:bg-gradient-to-r hover:from-[#4F46E5] hover:to-purple-600 hover:text-white transition-all"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Verify Link */}
                {cert.verifyLink && (
                  <motion.a
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 text-[#4F46E5] text-sm hover:underline"
                  >
                    <span>Verify Certificate</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                )}

                {/* Decorative gradient line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`mt-6 h-1 bg-gradient-to-r ${cert.color} rounded-full origin-left`}
                />
              </div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none rounded-2xl"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '4', label: 'Professional Certificates', icon: '🏆' },
            { value: '2', label: 'Top Tech Companies', icon: '🌟' },
            { value: '15+', label: 'Skills Mastered', icon: '💡' },
            { value: '100%', label: 'Completion Rate', icon: '✨' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
