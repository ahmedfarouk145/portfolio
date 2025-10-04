import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Sparkles, Zap, Heart, Code2 } from 'lucide-react';

export function ParallaxSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const values = [
    {
      icon: <Sparkles className="w-12 h-12" />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Performance',
      description: 'Optimizing for speed and best user experience',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: 'Passion',
      description: 'Loving what I do and delivering with dedication',
      color: 'from-red-500 to-pink-500'
    }
  ];

  return (
    <section ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-72 h-72 bg-[#4F46E5]/10 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          style={{ opacity, scale }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl lg:text-6xl text-gray-900 dark:text-white mb-6"
            style={{ y: y1 }}
          >
            My <span className="bg-gradient-to-r from-[#4F46E5] to-purple-600 bg-clip-text text-transparent">Core Values</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            style={{ y: y2 }}
          >
            The principles that guide my work and drive me to excellence
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              style={{
                y: index % 2 === 0 ? y1 : y2,
                opacity
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden group"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white mb-6 shadow-lg`}
                >
                  {value.icon}
                </motion.div>
                
                <h3 className="text-2xl text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>

              {/* Animated border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: `linear-gradient(45deg, transparent, ${value.color.includes('yellow') ? '#F59E0B' : value.color.includes('blue') ? '#4F46E5' : value.color.includes('purple') ? '#9333EA' : '#EC4899'}, transparent)`,
                  padding: '2px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Floating quote */}
        <motion.div
          style={{ y: y1, opacity }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 italic max-w-3xl mx-auto">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <p className="mt-4 text-gray-500 dark:text-gray-400">— Cory House</p>
        </motion.div>
      </div>
    </section>
  );
}
