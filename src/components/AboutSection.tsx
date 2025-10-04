import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Code2, Briefcase, Layers } from 'lucide-react';
import profilePhoto from 'figma:asset/34a98165bc66217390fd397e34f0b1153a1868ba.png';

export function AboutSection() {
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

  const highlights = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      value: '2+',
      label: 'Years Experience',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      value: '50+',
      label: 'Projects Completed',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      value: '4',
      label: 'Certifications',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
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
            Get to know me
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Animated glow effect */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-[#4F46E5] to-purple-600 rounded-full blur-2xl"
              />
              
              {/* Photo container */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <img
                  src={profilePhoto}
                  alt="Ahmed Farouk"
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[#4F46E5]/80 to-transparent flex items-end justify-center pb-8"
                >
                  <span className="text-white text-lg">Ahmed Farouk</span>
                </motion.div>

                {/* Sparkle effects */}
                <motion.div
                  className="absolute top-4 right-4"
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg" />
                </motion.div>
              </motion.div>

              {/* Decorative circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-[#4F46E5] border-dashed rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-4 -left-4 w-20 h-20 border-4 border-purple-500 border-dashed rounded-full"
              />

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -left-8 top-1/4 bg-white rounded-2xl px-4 py-2 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-700">Available</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute -right-8 bottom-1/4 bg-white rounded-2xl px-4 py-2 shadow-xl border border-gray-100"
              >
                <div className="text-sm text-gray-700">⭐ 5.0 Rating</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                I'm a passionate <span className="text-[#4F46E5]">Full-Stack Developer</span> currently pursuing a Computer Science degree 
                with a major in Software Engineering. I specialize in building exceptional web and mobile applications using modern JavaScript 
                frameworks and cutting-edge technologies.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                With <span className="text-[#4F46E5]">professional certifications from Meta and IBM</span>, and hands-on experience 
                in freelance development since 2024, I bring both academic knowledge and real-world expertise to every project. 
                My tech stack includes React, Next.js, React Native, Node.js, and more.
              </motion.p>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${highlight.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {highlight.icon}
                  </div>
                  <div className="text-3xl text-gray-900 mb-1">{highlight.value}</div>
                  <div className="text-sm text-gray-600">{highlight.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
