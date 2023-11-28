import { NextIntlClientProvider } from 'next-intl';
import { render, screen } from '@/test-utils';
import { Features } from './Features';
import TranslationsENG from '@/messages/en.json';

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
});
