import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { DarkModeToggle } from './components/DarkModeToggle';
import { FloatingShapes3D } from './components/FloatingShapes3D';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { StatsSection } from './components/StatsSection';
import { ServicesSection } from './components/ServicesSection';
import { SkillsSection } from './components/SkillsSection';
import { SkillRadar } from './components/SkillRadar';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { TechStackVisualization } from './components/TechStackVisualization';
import { CertificationsSection } from './components/CertificationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GitHubStats } from './components/GitHubStats';
import { BentoGrid } from './components/BentoGrid';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CodeShowcase } from './components/CodeShowcase';
import { InteractiveShowcase } from './components/InteractiveShowcase';
import { ParallaxSection } from './components/ParallaxSection';
import { AchievementsShowcase } from './components/AchievementsShowcase';
import { BlogPreview } from './components/BlogPreview';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Custom Cursor (hidden on mobile) */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {/* 3D Floating Shapes Background */}
      <FloatingShapes3D />

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Dark Mode Toggle */}
      <DarkModeToggle />

      <Header />
      <main>
        <Hero />
        <AboutSection />
        <StatsSection />
        <InfiniteMarquee />
        <ServicesSection />
        <SkillsSection />
        <SkillRadar />
        <TechStackVisualization />
        <BentoGrid />
        <CertificationsSection />
        <ExperienceSection />
        <GitHubStats />
        <ProjectsSection />
        <ProcessTimeline />
        <CodeShowcase />
        <InteractiveShowcase />
        <ParallaxSection />
        <AchievementsShowcase />
        <BlogPreview />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.15, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-[#4F46E5] to-purple-600 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
            
            {/* Ripple effect */}
            <span className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating gradient orbs */}
      <div className="fixed bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#4F46E5]/5 to-purple-500/5 dark:from-[#4F46E5]/10 dark:to-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity duration-300" />
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-indigo-500/5 to-cyan-500/5 dark:from-indigo-500/10 dark:to-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity duration-300" />
    </motion.div>
  );
}