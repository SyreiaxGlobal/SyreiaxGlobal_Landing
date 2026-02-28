import { lazy, Suspense } from 'react';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import { AudienceProvider } from './context/AudienceContext';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudienceSelector from './components/AudienceSelector';
import ToastProvider from './components/ui/Toast';
import FloatingCTA from './components/FloatingCTA';

/* Lazy-load below-the-fold sections to reduce initial bundle */
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const EcosystemGrid = lazy(() => import('./components/EcosystemGrid'));
const TechnologyTabs = lazy(() => import('./components/TechnologyTabs'));
const RoadmapTimeline = lazy(() => import('./components/RoadmapTimeline'));
const MultiCTA = lazy(() => import('./components/MultiCTA'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const Footer = lazy(() => import('./components/Footer'));

const SectionSkeleton = () => (
  <div className="py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#4ECDC4]/30 border-t-[#4ECDC4] rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
    <LazyMotion features={domAnimation}>
    <MotionConfig reducedMotion="user">
    <AudienceProvider>
    <div className="min-h-screen bg-[#0A1128]">
      <Navbar />
      <Hero />
      <AudienceSelector />
      <Suspense fallback={<SectionSkeleton />}>
        <ProblemSolution />
        <EcosystemGrid />
        <TechnologyTabs />
        <RoadmapTimeline />
        <MultiCTA />
        <ContactSection />
        <Footer />
      </Suspense>
      <FloatingCTA />
      <ToastProvider />
    </div>
    </AudienceProvider>
    </MotionConfig>
    </LazyMotion>
    </ErrorBoundary>
  );
}

export default App;
