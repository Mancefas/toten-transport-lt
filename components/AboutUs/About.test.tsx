import { render, screen } from '@/test-utils';
import { AboutUs } from './AboutUs';
import { NextIntlClientProvider } from 'next-intl';
import TranslationsENG from '@/messages/en.json'
import TranslationsLTU from '@/messages/lt.json'

describe('AboutUs', () => {
  it('should render ENG translated text', () => {
    render(
      <>
        <NextIntlClientProvider locale={'en'} messages={TranslationsENG}>
          <AboutUs />
        </NextIntlClientProvider>
      </>
    );

    expect(screen.getByText(TranslationsENG.About.firstText)).toBeInTheDocument();
    expect(screen.getByText(TranslationsENG.About.secondText)).toBeInTheDocument();
    expect(screen.getByText((content) => content.trim().startsWith(TranslationsENG.About.address))).toBeInTheDocument();

  });

  it('should render LTU translated text', () => {
    render(
      <>
        <NextIntlClientProvider locale={'lt'} messages={TranslationsLTU}>
          <AboutUs />
        </NextIntlClientProvider>
      </>
    );

    expect(screen.getByText(TranslationsLTU.About.firstText)).toBeInTheDocument();
    expect(screen.getByText(TranslationsLTU.About.secondText)).toBeInTheDocument();
    expect(screen.getByText((content) => content.trim().startsWith(TranslationsLTU.About.address))).toBeInTheDocument();

  });
});
