import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Palette, Code, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export function ProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

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
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible]);

  const steps = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Discovery',
      description: 'Understanding your vision, goals, and target audience',
      color: 'from-yellow-500 to-orange-500',
      details: ['Requirements gathering', 'Market research', 'Competitive analysis']
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Design',
      description: 'Creating beautiful, intuitive interfaces',
      color: 'from-pink-500 to-purple-500',
      details: ['Wireframing', 'UI/UX design', 'Prototyping']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development',
      description: 'Building with clean, scalable code',
      color: 'from-blue-500 to-cyan-500',
      details: ['Frontend development', 'Backend integration', 'API development']
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: 'Testing',
      description: 'Ensuring quality and performance',
      color: 'from-green-500 to-emerald-500',
      details: ['Quality assurance', 'Performance testing', 'Bug fixing']
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Launch',
      description: 'Deploying and supporting your success',
      color: 'from-purple-500 to-pink-500',
      details: ['Deployment', 'Monitoring', 'Ongoing support']
    }
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decoration */}
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
            My Process
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            How I <span className="bg-gradient-to-r from-[#4F46E5] to-purple-600 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A proven process that delivers exceptional results every time
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 -translate-y-1/2 hidden lg:block" />
          
          {/* Active progress line */}
          <motion.div
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#4F46E5] to-purple-600 -translate-y-1/2 hidden lg:block"
            initial={{ width: '0%' }}
            animate={isVisible ? { width: `${(activeStep / (steps.length - 1)) * 100}%` } : {}}
            transition={{ duration: 0.8 }}
          />

          {/* Steps */}
          <div className="grid md:grid-cols-5 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                onMouseEnter={() => setActiveStep(index)}
                className="relative"
              >
                {/* Step card */}
                <div className={`relative bg-white dark:bg-gray-800 rounded-3xl p-6 border-2 transition-all duration-300 ${
                  activeStep === index
                    ? 'border-[#4F46E5] shadow-2xl shadow-[#4F46E5]/20 scale-105'
                    : 'border-gray-200 dark:border-gray-700'
                }`}>
                  {/* Number badge */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-gradient-to-br from-[#4F46E5] to-purple-600 text-white flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <motion.div
                    animate={activeStep === index ? { rotate: [0, -10, 10, 0], scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white mb-4 shadow-lg`}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    {step.description}
                  </p>

                  {/* Details - shown only when active */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={activeStep === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <ul className="space-y-2 mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#4F46E5]" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  {/* Arrow connector (mobile) */}
                  <div className="md:hidden flex justify-center mt-4">
                    <ArrowRight className="w-6 h-6 text-gray-400 rotate-90" />
                  </div>
                </div>

                {/* Desktop connector dot */}
                <div className="hidden lg:flex absolute -bottom-12 left-1/2 -translate-x-1/2 items-center justify-center">
                  <motion.div
                    animate={activeStep === index ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.5, repeat: activeStep === index ? Infinity : 0 }}
                    className={`w-4 h-4 rounded-full ${
                      activeStep >= index ? 'bg-[#4F46E5]' : 'bg-gray-300 dark:bg-gray-600'
                    }`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ready to start your project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Let's Work Together</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}