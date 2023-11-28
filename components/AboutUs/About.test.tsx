import { NextIntlClientProvider } from 'next-intl';
import { render, screen } from '@/test-utils';
import { AboutUs } from './AboutUs';
import TranslationsENG from '@/messages/en.json';

describe('AboutUs', () => {
  it('should render ENG translated text', () => {
    render(
      <>
        <NextIntlClientProvider locale="en" messages={TranslationsENG}>
          <AboutUs />
        </NextIntlClientProvider>
      </>
    );

    expect(screen.getByText(TranslationsENG.About.firstText)).toBeInTheDocument();
    expect(screen.getByText(TranslationsENG.About.secondText)).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.trim().startsWith(TranslationsENG.About.address))
    ).toBeInTheDocument();
  });
});
