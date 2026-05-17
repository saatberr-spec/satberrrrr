import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import VisionMissionValuesSection from './components/VisionMissionValuesSection';
import DifferentiatorsSection from './components/DifferentiatorsSection';
import ServicesSection from './components/ServicesSection';
import PartnersSection from './components/PartnersSection';
import StatsSection from './components/StatsSection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main className="w-full bg-slate-950 text-white">
      <Navigation />
      <div className="pt-16">
        <HeroSection />
        <AboutSection />
        <VisionMissionValuesSection />
        <DifferentiatorsSection />
        <ServicesSection />
        <PartnersSection />
        <StatsSection />
        <ClosingSection />
        <Footer />
      </div>
    </main>
  );
}
