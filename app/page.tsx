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

import aboutTranslations from '../dictionaries/about/lt.json'
import contactsTranslations from '../dictionaries/contacts/lt.json'
import featuresTranslations from '../dictionaries/features/lt.json'
import googleMapsTranslations from '../dictionaries/maps/lt.json'
import headerTranslations from '../dictionaries/header/lt.json'
import heroSectionTranslations from '../dictionaries/hero/lt.json'

export default function HomePage() {
  return (
    <>
      <Header text={headerTranslations} />
      <HeroSection text={heroSectionTranslations} />
      <Features text={featuresTranslations} />
      <AboutUs text={aboutTranslations} />
      <ContactsAccordion text={contactsTranslations} />
      <GoogleMapsIframe text={googleMapsTranslations}/>
      <Welcome />
      <ColorSchemeToggle />
      <Footer />
    </>
  );
}
