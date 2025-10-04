import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface TechNode {
  name: string;
  category: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

export function TechStackVisualization() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

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

  const techNodes: TechNode[] = [
    // Frontend
    { name: 'React', category: 'Frontend', x: 30, y: 30, size: 80, color: '#61DAFB' },
    { name: 'Next.js', category: 'Frontend', x: 20, y: 60, size: 70, color: '#000000' },
    { name: 'Tailwind', category: 'Frontend', x: 40, y: 50, size: 65, color: '#06B6D4' },
    
    // Mobile
    { name: 'React Native', category: 'Mobile', x: 70, y: 30, size: 75, color: '#61DAFB' },
    { name: 'Flutter', category: 'Mobile', x: 80, y: 55, size: 60, color: '#02569B' },
    
    // Backend
    { name: 'Node.js', category: 'Backend', x: 50, y: 75, size: 70, color: '#339933' },
    { name: 'Express', category: 'Backend', x: 35, y: 85, size: 55, color: '#000000' },
    { name: 'PostgreSQL', category: 'Backend', x: 65, y: 80, size: 60, color: '#4169E1' },
    
    // Tools
    { name: 'Git', category: 'Tools', x: 15, y: 40, size: 50, color: '#F05032' },
    { name: 'Docker', category: 'Tools', x: 85, y: 40, size: 55, color: '#2496ED' },
  ];

  const categories = ['Frontend', 'Mobile', 'Backend', 'Tools'];
  const categoryColors: Record<string, string> = {
    Frontend: '#4F46E5',
    Mobile: '#9333EA',
    Backend: '#10B981',
    Tools: '#F59E0B'
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
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
            className="inline-block px-4 py-2 bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818CF8] rounded-full text-sm mb-4"
          >
            Interactive Visualization
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Tech Stack Universe</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Visualization */}
        <div className="relative h-[600px] bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
          {/* Grid background */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-400 dark:text-gray-600"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Tech Nodes */}
          <svg className="w-full h-full relative z-10">
            {/* Connection Lines */}
            {techNodes.map((node, i) =>
              techNodes.slice(i + 1).map((otherNode, j) => (
                <motion.line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${otherNode.x}%`}
                  y2={`${otherNode.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  opacity="0.1"
                  initial={{ pathLength: 0 }}
                  animate={isVisible ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: i * 0.1 }}
                />
              ))
            )}
            
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#9333EA" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Nodes */}
            {techNodes.map((node, index) => (
              <g key={node.name}>
                {/* Outer glow */}
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={hoveredNode === node.name ? node.size * 0.8 : node.size * 0.6}
                  fill={node.color}
                  opacity="0.1"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                />
                
                {/* Main circle */}
                <motion.circle
                  cx={`${node.x}%`}
                  cy={`${node.y}%`}
                  r={node.size * 0.4}
                  fill={node.color}
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredNode(node.name)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className="cursor-pointer"
                />

                {/* Label */}
                <motion.text
                  x={`${node.x}%`}
                  y={`${node.y + 8}%`}
                  textAnchor="middle"
                  className="text-sm fill-gray-900 dark:fill-white pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: hoveredNode === node.name ? 1 : 0.7 } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {node.name}
                </motion.text>
              </g>
            ))}
          </svg>

          {/* Legend */}
          <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Categories</h4>
            <div className="grid grid-cols-2 gap-3">
              {categories.map((category) => (
                <motion.div
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2"
                >
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: categoryColors[category] }}
                  />
                  <span className="text-xs text-gray-600 dark:text-gray-300">{category}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hover Info */}
          {hoveredNode && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
            >
              <h4 className="font-semibold text-gray-900 dark:text-white">{hoveredNode}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {techNodes.find(n => n.name === hoveredNode)?.category}
              </p>
            </motion.div>
          )}
        </div>

        {/* Interaction Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400"
        >
          Hover over nodes to explore technologies
        </motion.p>
      </div>
    </section>
  );
}
