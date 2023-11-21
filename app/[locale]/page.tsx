import {unstable_setRequestLocale} from 'next-intl/server';

import HeroSection from '@/components/HeroSection/HeroSection';
import Features from '@/components/Features/Features';
import {SupportedLocale} from '@/lib/navigation';

export default function HomePage({params: { locale }}: {  params: {    locale: SupportedLocale;  }}) {
  unstable_setRequestLocale(locale);
  
  return (
    <>
      <HeroSection />
      <Features />
    </>
  );
}
