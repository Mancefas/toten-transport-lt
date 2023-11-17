'use client';

import HeroSection from '@/components/HeroSection/HeroSection';
import Features from '@/components/Features/Features';

import featuresTranslations from '@/dictionaries/features/en.json';
import heroSectionTranslations from '@/dictionaries/hero/en.json';

export default function HomePage() {
  return (
    <>
      <HeroSection text={heroSectionTranslations} />
      <Features text={featuresTranslations} />
    </>
  );
}
