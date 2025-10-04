import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Award, Trophy, Star, Target, Zap, Users } from 'lucide-react';

export function AchievementsShowcase() {
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

  const achievements = [
    {
      icon: <Trophy className="w-10 h-10" />,
      title: 'Meta Front-End Developer',
      organization: 'Meta (Facebook)',
      year: '2024',
      description: 'Professional Certificate in Modern Front-End Development',
      color: 'from-blue-500 to-cyan-500',
      glow: 'shadow-blue-500/50'
    },
    {
      icon: <Award className="w-10 h-10" />,
      title: 'React Native Specialist',
      organization: 'Meta (Facebook)',
      year: '2024',
      description: 'Certified in Cross-Platform Mobile Development',
      color: 'from-purple-500 to-pink-500',
      glow: 'shadow-purple-500/50'
    },
    {
      icon: <Star className="w-10 h-10" />,
      title: 'Full-Stack JavaScript Developer',
      organization: 'IBM',
      year: '2024',
      description: 'Professional Certificate in Full-Stack Development',
      color: 'from-green-500 to-emerald-500',
      glow: 'shadow-green-500/50'
    },
    {
      icon: <Target className="w-10 h-10" />,
      title: 'IBM Cloud Developer',
      organization: 'IBM',
      year: '2024',
      description: 'Certified in Cloud-Native Application Development',
      color: 'from-orange-500 to-red-500',
      glow: 'shadow-orange-500/50'
    }
  ];

  const highlights = [
    {
      icon: <Zap className="w-8 h-8" />,
      value: '50+',
      label: 'Projects Completed',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: '30+',
      label: 'Happy Clients',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: '5.0',
      label: 'Average Rating',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: '4',
      label: 'Certifications',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-[#1a1a2e] to-black relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#4F46E5] to-purple-600 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500 to-blue-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm mb-4"
          >
            Achievements & Awards
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            Recognition & <span className="bg-gradient-to-r from-[#4F46E5] to-purple-600 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Certified expertise backed by industry-leading organizations
          </p>
        </motion.div>

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                {highlight.icon}
              </div>
              <div className="text-3xl text-white mb-2">{highlight.value}</div>
              <div className="text-sm text-gray-400">{highlight.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 overflow-hidden group hover:shadow-2xl ${achievement.glow} transition-all duration-300`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white mb-6 shadow-2xl`}
                >
                  {achievement.icon}
                </motion.div>

                {/* Year badge */}
                <div className="absolute top-0 right-0 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-bl-2xl rounded-tr-3xl text-white text-sm">
                  {achievement.year}
                </div>

                {/* Title */}
                <h3 className="text-2xl text-white mb-2">
                  {achievement.title}
                </h3>

                {/* Organization */}
                <div className={`inline-block px-3 py-1 rounded-full text-xs mb-4 bg-gradient-to-r ${achievement.color} text-white`}>
                  {achievement.organization}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm">
                  {achievement.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`mt-6 h-1 bg-gradient-to-r ${achievement.color} rounded-full origin-left`}
                />
              </div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />

              {/* Particle effect */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white/20 rounded-full blur-sm group-hover:animate-ping" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
        >
          <blockquote className="text-2xl text-white italic mb-4">
            "Excellence is not a destination; it's a continuous journey."
          </blockquote>
          <p className="text-gray-400">— Ahmed Farouk</p>
        </motion.div>
      </div>
    </section>
  );
}