import { NextIntlClientProvider } from 'next-intl';
import { render, screen } from '@/test-utils';
import { HeroSection } from './HeroSection';
import TranslationsENG from '@/messages/en.json';

const component = () =>
  render(
    <NextIntlClientProvider locale="en" messages={TranslationsENG}>
      <HeroSection />
    </NextIntlClientProvider>
  );

describe('HeroSection tests', () => {
  it('renders HeroSection', () => {
    component();
    expect(screen.getByText(TranslationsENG.Hero.firstText)).toBeInTheDocument();
    expect(screen.getByText(TranslationsENG.Hero.secondText)).toBeInTheDocument();
    expect(screen.getByText(TranslationsENG.Hero.btnText)).toBeInTheDocument();
  });
  it('renders main CTA button as a link', () => {
    component();
    expect(screen.getByRole('link', { name: TranslationsENG.Hero.btnText })).toBeInTheDocument();
  });
});
