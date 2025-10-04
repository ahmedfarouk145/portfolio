import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Code2, Rocket, Target, Zap, Award, Heart, Users, TrendingUp } from 'lucide-react';

export function BentoGrid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  const cards = [
    {
      id: 1,
      title: 'Fast Performance',
      description: 'Lightning-fast load times and smooth 60fps animations',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      size: 'col-span-1 row-span-1'
    },
    {
      id: 2,
      title: 'Award-Winning Design',
      description: 'Modern, clean interfaces that users love. Inspired by the best designs on Awwwards and Dribbble.',
      icon: <Award className="w-10 h-10" />,
      color: 'from-purple-500 to-pink-500',
      size: 'col-span-2 row-span-1'
    },
    {
      id: 3,
      title: 'User-Centered',
      description: 'Every pixel crafted with the end user in mind',
      icon: <Heart className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      size: 'col-span-1 row-span-1'
    },
    {
      id: 4,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business needs',
      icon: <TrendingUp className="w-10 h-10" />,
      color: 'from-green-500 to-emerald-500',
      size: 'col-span-1 row-span-2'
    },
    {
      id: 5,
      title: 'Clean Code',
      description: 'Maintainable, well-documented code following industry best practices',
      icon: <Code2 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      size: 'col-span-2 row-span-1'
    },
    {
      id: 6,
      title: 'Client Success',
      description: 'Dedicated to delivering beyond expectations',
      icon: <Users className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      size: 'col-span-1 row-span-1'
    },
    {
      id: 7,
      title: 'Innovation First',
      description: 'Always exploring cutting-edge technologies',
      icon: <Rocket className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      size: 'col-span-1 row-span-1'
    },
    {
      id: 8,
      title: 'Pixel Perfect',
      description: 'Attention to every detail',
      icon: <Target className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      size: 'col-span-1 row-span-1'
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4F46E5]/5 via-transparent to-purple-500/5 pointer-events-none" />

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
            className="inline-block px-4 py-2 bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818CF8] rounded-full text-sm mb-4"
          >
            Why Choose Me
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            What Makes Me <span className="bg-gradient-to-r from-[#4F46E5] to-purple-600 bg-clip-text text-transparent">Different</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`${card.size} relative bg-white dark:bg-gray-800 rounded-3xl p-6 lg:p-8 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group`}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.color} blur-xl opacity-20`} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                >
                  {card.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl text-gray-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                  {card.description}
                </p>

                {/* Decorative element */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className={`mt-auto pt-4 h-1 bg-gradient-to-r ${card.color} rounded-full origin-left`}
                />
              </div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}