import { NextIntlClientProvider } from 'next-intl';
import { render, screen } from '@/test-utils';
import { Features } from './Features';
import TranslationsENG from '@/messages/en.json';
import TranslationsLTU from '@/messages/lt.json';

describe('ContactsAccordion', () => {
  it('should render English translations and features in component', () => {
    render(
      <NextIntlClientProvider locale="en" messages={TranslationsENG}>
        <Features />
      </NextIntlClientProvider>
    );
    expect(screen.getByText(TranslationsENG.Feature[1].featureHeading)).toBeInTheDocument();
    expect(screen.getByText(TranslationsENG.Feature[1].featureText)).toBeInTheDocument();
  });

  it('should render Lithuanian translations and features in component', () => {
    render(
      <NextIntlClientProvider locale="lt" messages={TranslationsLTU}>
        <Features />
      </NextIntlClientProvider>
    );

    expect(screen.getByText(TranslationsLTU.Feature[1].featureHeading)).toBeInTheDocument();
    expect(screen.getByText(TranslationsLTU.Feature[1].featureText)).toBeInTheDocument();
  });
});
