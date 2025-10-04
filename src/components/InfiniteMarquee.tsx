import { motion } from 'motion/react';

interface MarqueeItem {
  name: string;
  icon: string;
  color: string;
}

export function InfiniteMarquee() {
  const technologies: MarqueeItem[] = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Next.js', icon: '▲', color: '#000000' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' },
    { name: 'Tailwind', icon: '🎨', color: '#06B6D4' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'React Native', icon: '📱', color: '#61DAFB' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'PostgreSQL', icon: '🐘', color: '#4169E1' },
    { name: 'Express', icon: '🚂', color: '#000000' },
    { name: 'Firebase', icon: '🔥', color: '#FFCA28' },
    { name: 'Git', icon: '📦', color: '#F05032' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'GraphQL', icon: '◼️', color: '#E10098' },
    { name: 'Redux', icon: '🔄', color: '#764ABC' },
  ];

  // Duplicate for seamless loop
  const items = [...technologies, ...technologies];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="mb-8 text-center">
        <h3 className="text-2xl lg:text-3xl text-gray-900 dark:text-white mb-2">
          Technologies I Love
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Building with the best tools in the industry
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10 pointer-events-none" />

        {/* Scrolling content */}
        <motion.div
          className="flex gap-8"
          animate={{
            x: [0, -50 * technologies.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {items.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, y: -10 }}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 rounded-2xl shadow-md border border-gray-200 dark:border-gray-600 min-w-[180px]"
            >
              <span className="text-4xl">{tech.icon}</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </div>
                <div
                  className="h-1 rounded-full mt-1"
                  style={{ backgroundColor: tech.color, width: '100%' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second row - reverse direction */}
      <div className="relative mt-8">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-gray-800 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-gray-800 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8"
          animate={{
            x: [-50 * technologies.length, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 30,
              ease: 'linear',
            },
          }}
        >
          {items.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, y: -10 }}
              className="flex-shrink-0 flex items-center gap-3 px-6 py-4 bg-white dark:bg-gray-700 rounded-2xl shadow-md border border-gray-200 dark:border-gray-600 min-w-[180px]"
            >
              <span className="text-4xl">{tech.icon}</span>
              <div>
                <div className="font-semibold text-gray-900 dark:text-white">
                  {tech.name}
                </div>
                <div
                  className="h-1 rounded-full mt-1"
                  style={{ backgroundColor: tech.color, width: '100%' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}