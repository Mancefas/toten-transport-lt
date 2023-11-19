'use client';

import {unstable_setRequestLocale} from 'next-intl/server';

import HeroSection from '@/components/HeroSection/HeroSection';
import Features from '@/components/Features/Features';

import featuresTranslations from '@/dictionaries/features/en.json';

type SupportedLocale = 'lt' | 'en';

export default function HomePage({
  params: { locale }
}: {
  params: {
    locale: SupportedLocale;
  };
}) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <HeroSection />
      <Features text={featuresTranslations} />
    </>
  );
}
