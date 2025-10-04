import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Shape {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  type: 'cube' | 'sphere' | 'pyramid' | 'torus';
  color: string;
}

export function FloatingShapes3D() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = [
      'from-blue-500/20 to-cyan-500/20',
      'from-purple-500/20 to-pink-500/20',
      'from-green-500/20 to-emerald-500/20',
      'from-orange-500/20 to-red-500/20',
      'from-indigo-500/20 to-purple-500/20',
    ];

    const types: ('cube' | 'sphere' | 'pyramid' | 'torus')[] = ['cube', 'sphere', 'pyramid', 'torus'];

    const newShapes: Shape[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      type: types[Math.floor(Math.random() * types.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setShapes(newShapes);
  }, []);

  const getShapeElement = (shape: Shape) => {
    const baseClasses = `absolute rounded-2xl bg-gradient-to-br ${shape.color} backdrop-blur-sm border border-white/10 shadow-2xl`;

    switch (shape.type) {
      case 'cube':
        return (
          <div
            className={`${baseClasses}`}
            style={{
              width: shape.size,
              height: shape.size,
              transform: 'perspective(1000px) rotateX(45deg) rotateZ(45deg)',
              transformStyle: 'preserve-3d',
            }}
          />
        );
      case 'sphere':
        return (
          <div
            className={`${baseClasses} rounded-full`}
            style={{
              width: shape.size,
              height: shape.size,
              transform: 'perspective(1000px)',
            }}
          />
        );
      case 'pyramid':
        return (
          <div
            className={`${baseClasses}`}
            style={{
              width: shape.size,
              height: shape.size,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              transform: 'perspective(1000px) rotateX(20deg)',
            }}
          />
        );
      case 'torus':
        return (
          <div
            className={`${baseClasses} rounded-full border-4`}
            style={{
              width: shape.size,
              height: shape.size,
              transform: 'perspective(1000px) rotateY(45deg)',
              borderWidth: shape.size / 4,
            }}
          />
        );
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {getShapeElement(shape)}
        </motion.div>
      ))}

      {/* Additional animated gradients */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#4F46E5]/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}