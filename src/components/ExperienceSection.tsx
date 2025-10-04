import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, Sparkles } from 'lucide-react';

interface TimelineItem {
  type: 'work' | 'education' | 'achievement';
  title: string;
  organization: string;
  period: string;
  current?: boolean;
  description: string;
  icon: JSX.Element;
  color: string;
}

export function ExperienceSection() {
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

  const timeline: TimelineItem[] = [
    {
      type: 'work',
      title: 'Full-Stack Developer (Freelance)',
      organization: 'Self-Employed',
      period: 'June 2024 - Present',
      current: true,
      description: 'Building custom web and mobile applications for clients worldwide. Specializing in React, Next.js, React Native, and full-stack JavaScript development.',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'work',
      title: 'Full-Stack Developer',
      organization: 'Tech Company',
      period: '2023 - June 2024',
      description: 'Developed and maintained enterprise web applications using modern JavaScript frameworks. Collaborated with cross-functional teams to deliver high-quality solutions.',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      type: 'achievement',
      title: 'Multiple Professional Certifications',
      organization: 'Meta & IBM',
      period: '2024',
      description: 'Completed Meta Front-End Developer, Meta React Native, IBM Full-Stack JavaScript Developer, and IBM React Native Specialization certifications.',
      icon: <Award className="w-5 h-5" />,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      organization: 'University - Software Engineering Major',
      period: '2023 - 2027 (Expected)',
      current: true,
      description: 'Currently pursuing a Computer Science degree with a major in Software Engineering. Focusing on advanced algorithms, system design, and software architecture.',
      icon: <GraduationCap className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#4F46E5]/10 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
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
            className="inline-block px-4 py-2 bg-[#4F46E5]/10 text-[#4F46E5] rounded-full text-sm mb-4"
          >
            My Journey
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-start gap-6">
                {/* Timeline line and dot */}
                <div className="relative flex flex-col items-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg z-10`}
                  >
                    {item.icon}
                    {item.current && (
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -inset-1 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl -z-10"
                      />
                    )}
                  </motion.div>
                  
                  {/* Vertical line */}
                  {index !== timeline.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={isVisible ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                      className="w-0.5 h-full min-h-[100px] bg-gradient-to-b from-gray-300 to-transparent mt-2 origin-top"
                    />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02, x: 5 }}
                  className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl text-gray-900">{item.title}</h3>
                          {item.current && (
                            <motion.span
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                              className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center gap-1"
                            >
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                              Current
                            </motion.span>
                          )}
                        </div>
                        <p className="text-[#4F46E5]">{item.organization}</p>
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-600 text-sm rounded-full whitespace-nowrap border border-gray-200">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    
                    {/* Decorative gradient line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className={`mt-4 h-1 bg-gradient-to-r ${item.color} rounded-full origin-left`}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: '💼', value: '2+', label: 'Years Professional Experience' },
            { icon: '🎓', value: '4', label: 'Industry Certifications' },
            { icon: '⚡', value: '50+', label: 'Projects Delivered' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.1 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="text-center bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100"
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
