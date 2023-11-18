'use client';

import AboutUs from '@/components/AboutUs/AboutUs';

import aboutTranslations from '@/dictionaries/about/en.json';

export default function ContactsPage() {
  return <AboutUs text={aboutTranslations} />;
}
