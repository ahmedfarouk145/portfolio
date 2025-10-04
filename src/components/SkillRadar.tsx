import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

export function SkillRadar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

  const skills: Skill[] = [
    { name: 'React/Next.js', level: 95, color: '#61DAFB' },
    { name: 'TypeScript', level: 90, color: '#3178C6' },
    { name: 'Node.js', level: 88, color: '#339933' },
    { name: 'React Native', level: 92, color: '#61DAFB' },
    { name: 'UI/UX Design', level: 85, color: '#FF6B6B' },
    { name: 'Database', level: 87, color: '#4169E1' },
  ];

  const size = 400;
  const center = size / 2;
  const maxRadius = size / 2 - 60;
  const levels = 5;

  // Calculate polygon points
  const getPoint = (skill: Skill, index: number, skills: Skill[]) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
    const radius = (skill.level / 100) * maxRadius;
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y, angle, radius };
  };

  const points = skills.map((skill, index) => getPoint(skill, index, skills));
  const polygonPoints = points.map(p => `${p.x},${p.y}`).join(' ');

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-black dark:from-black dark:to-gray-900 relative overflow-hidden"
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
            className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm mb-4"
          >
            Skill Visualization
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-white mb-4">
            My Expertise <span className="bg-gradient-to-r from-[#4F46E5] to-purple-600 bg-clip-text text-transparent">Radar</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#4F46E5] to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <svg width={size} height={size} className="drop-shadow-2xl">
              {/* Background circles (levels) */}
              {Array.from({ length: levels }).map((_, i) => {
                const radius = (maxRadius / levels) * (i + 1);
                return (
                  <motion.circle
                    key={i}
                    cx={center}
                    cy={center}
                    r={radius}
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                );
              })}

              {/* Axis lines */}
              {points.map((point, index) => (
                <motion.line
                  key={index}
                  x1={center}
                  y1={center}
                  x2={center + maxRadius * Math.cos(point.angle)}
                  y2={center + maxRadius * Math.sin(point.angle)}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isVisible ? { pathLength: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                />
              ))}

              {/* Skill polygon */}
              <motion.polygon
                points={polygonPoints}
                fill="url(#radarGradient)"
                stroke="#4F46E5"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 0.6 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              />

              {/* Skill points */}
              {points.map((point, index) => (
                <g key={index}>
                  <motion.circle
                    cx={point.x}
                    cy={point.y}
                    r={hoveredSkill === skills[index].name ? 10 : 6}
                    fill={skills[index].color}
                    stroke="white"
                    strokeWidth="2"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(skills[index].name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="cursor-pointer"
                  />
                  
                  {/* Skill labels */}
                  <motion.text
                    x={center + (maxRadius + 30) * Math.cos(point.angle)}
                    y={center + (maxRadius + 30) * Math.sin(point.angle)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-sm fill-white font-medium"
                    initial={{ opacity: 0 }}
                    animate={isVisible ? { opacity: hoveredSkill === skills[index].name ? 1 : 0.7 } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {skills[index].name}
                  </motion.text>
                </g>
              ))}

              {/* Gradients */}
              <defs>
                <radialGradient id="radarGradient">
                  <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#9333EA" stopOpacity="0.2" />
                </radialGradient>
              </defs>
            </svg>

            {/* Center glow */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-[#4F46E5]/30 to-purple-600/30 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Skill List */}
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 transition-all duration-300 ${
                  hoveredSkill === skill.name ? 'scale-105 border-white/40' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-white/70">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}