import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'I specialize in full-stack web development, mobile app development with React Native, UI/UX design, and consulting services. I can help with everything from initial concept to deployment and maintenance.',
      icon: '💼'
    },
    {
      question: 'What is your development process?',
      answer: 'I follow a proven 5-step process: Discovery (understanding your needs), Design (creating beautiful interfaces), Development (building with clean code), Testing (ensuring quality), and Launch (deploying and supporting). This ensures transparency and quality throughout.',
      icon: '⚡'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity. A simple website takes 2-4 weeks, while a full web application or mobile app can take 2-4 months. I provide detailed timelines during our initial consultation.',
      icon: '⏱️'
    },
    {
      question: 'Do you work with clients remotely?',
      answer: 'Yes! I work with clients worldwide. I use modern collaboration tools like Slack, Zoom, and project management platforms to ensure smooth communication and project tracking, regardless of location.',
      icon: '🌍'
    },
    {
      question: 'What technologies do you use?',
      answer: 'I work with modern tech stacks including React, Next.js, TypeScript, Node.js, Express, React Native, PostgreSQL, MongoDB, and various cloud services. I choose the best tools for each project\'s specific needs.',
      icon: '🛠️'
    },
    {
      question: 'Can you help with existing projects?',
      answer: 'Absolutely! I can help improve, maintain, or add features to existing projects. I\'m experienced in code reviews, bug fixes, performance optimization, and feature development.',
      icon: '🔧'
    },
    {
      question: 'What are your rates?',
      answer: 'My rates vary depending on project scope and complexity. I offer both hourly and project-based pricing. Contact me for a free consultation and custom quote tailored to your specific needs.',
      icon: '💰'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes! I offer various support packages including bug fixes, updates, performance monitoring, and feature additions. I believe in long-term partnerships and am here to help your project grow.',
      icon: '🤝'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-[#4F46E5]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#4F46E5]/10 text-[#4F46E5] dark:text-[#818CF8] rounded-full text-sm mb-4"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.div>
          <h2 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-[#4F46E5] to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about working with me
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                className={`bg-white dark:bg-gray-800 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? 'border-[#4F46E5] shadow-xl shadow-[#4F46E5]/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-3xl">{faq.icon}</span>
                    <h3 className="text-lg text-gray-900 dark:text-white pr-8">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${
                      openIndex === index
                        ? 'bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2">
                        <div className="pl-16 pr-14">
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-12 text-center p-8 bg-gradient-to-r from-[#4F46E5]/10 to-purple-600/10 rounded-3xl border border-[#4F46E5]/20"
        >
          <h3 className="text-2xl text-gray-900 dark:text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            I'd love to hear from you. Let's discuss your project!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all"
          >
            <span>Get in Touch</span>
            <HelpCircle className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}