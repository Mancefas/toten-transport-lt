'use client';

import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Welcome />
      <ColorSchemeToggle />
      <Footer />
    </>
  );
}
