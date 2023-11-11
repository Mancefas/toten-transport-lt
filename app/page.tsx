'use client';

import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import HeroSection from '@/components/HeroSection/HeroSection';
import Features from '@/components/Features/Features';
import AboutUs from '@/components/AboutUs/AboutUs';
import ContactsAccordion from '@/components/ContactsAccordion/ContactsAccordion';
import GoogleMapsIframe from '@/components/GoogleMapsIframe/GoogleMapsIframe';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Features />
      <AboutUs />
      <ContactsAccordion />
      <GoogleMapsIframe />
      <Welcome />
      <ColorSchemeToggle />
      <Footer />
    </>
  );
}
