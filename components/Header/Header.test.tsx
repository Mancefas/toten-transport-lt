import { NextIntlClientProvider } from 'next-intl';
import { render, screen } from '@/test-utils';
import { Header } from './Header';
import TranslationsENG from '@/messages/en.json';

//mocking router, because LocaleSwitch uses useRouter() and it can only be used in react component
jest.mock('next/router');
jest.mock('@/components/LocaleSwitch');

const component = () =>
  render(
    <NextIntlClientProvider locale="en" messages={TranslationsENG}>
      <Header />
    </NextIntlClientProvider>
  );

describe('Header component tests', () => {
  it('renders header with company logo and navigation links', () => {
    component();
    expect(screen.getByAltText(TranslationsENG.Header.logoAlt)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: TranslationsENG.Header.logoAlt })).toHaveAttribute(
      'href',
      '/'
    );
    expect(
      screen.getByRole('link', { name: TranslationsENG.Header.aboutLink.name })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: TranslationsENG.Header.contactsLink.name })
    ).toBeInTheDocument();
  });
});
