'use client';

import AboutUs from '@/components/AboutUs/AboutUs';

import aboutTranslations from '@/dictionaries/about/lt.json';

export default function AboutUsPage() {
  return <AboutUs text={aboutTranslations} />;
}
