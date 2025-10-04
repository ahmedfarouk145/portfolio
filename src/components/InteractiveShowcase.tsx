import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { GlassmorphicCard } from './GlassmorphicCard';
import { MagneticButton } from './MagneticButton';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';

export function InteractiveShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const showcaseItems = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Clean Architecture',
      description: 'Well-structured, maintainable code that scales',
      color: 'from-blue-500 to-cyan-500',
      stats: '100+ Components'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Beautiful Design',
      description: 'Pixel-perfect interfaces inspired by top designers',
      color: 'from-purple-500 to-pink-500',
      stats: 'Awwwards Inspired'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Blazing Fast',
      description: 'Optimized performance for best user experience',
      color: 'from-yellow-500 to-orange-500',
      stats: '60fps Animations'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black dark:from-black dark:to-gray-900 relative overflow-hidden"
    >
      {/* Animated cursor follower */}
      <motion.div
        className="fixed w-64 h-64 rounded-full pointer-events-none z-0 mix-blend-screen"
        animate={{
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
        transition={{
          type: 'spring',
          stiffness: 50,
          damping: 15,
        }}
        style={{
          background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-6xl text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
          >
            Premium Quality,{' '}
            <span className="bg-gradient-to-r from-[#4F46E5] via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Every Time
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            Delivering world-class web experiences with attention to every detail
          </motion.p>
        </motion.div>

        {/* Glassmorphic Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              animate={isVisible ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <GlassmorphicCard className="p-8 group h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${item.color} text-white text-sm`}>
                  {item.stats}
                </div>
              </GlassmorphicCard>
            </motion.div>
          ))}
        </div>

        {/* Magnetic CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <MagneticButton
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4F46E5] via-purple-600 to-pink-600 text-white rounded-full text-lg shadow-2xl hover:shadow-[#4F46E5]/50 transition-all duration-300 cursor-pointer group"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </MagneticButton>
        </motion.div>

        {/* Animated Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="showcase-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#showcase-grid)" />
          </svg>
        </div>
      </div>
    </section>
  );
}