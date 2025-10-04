import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Palette, Rocket, Database, Zap } from 'lucide-react';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
}

export function ServicesSection() {
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

  const services: Service[] = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Building responsive, high-performance web applications using modern frameworks like React, Next.js, and Tailwind CSS.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Creating cross-platform mobile apps with Flutter, delivering native-like experiences for iOS and Android.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Designing intuitive, beautiful user interfaces that enhance user experience and drive engagement.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Developing robust server-side solutions with Node.js, Express, and database management systems.',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, efficiency, and scalability to deliver the best user experience.',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'API Integration',
      description: 'Seamlessly integrating third-party APIs and services to extend application functionality.',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4F46E5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            What I Do
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-4">Services & Expertise</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl text-gray-900 mb-3 group-hover:text-[#4F46E5] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover arrow */}
                <motion.div
                  initial={{ x: -10, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                  className="mt-4 flex items-center gap-2 text-[#4F46E5]"
                >
                  <span className="text-sm">Learn more</span>
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
