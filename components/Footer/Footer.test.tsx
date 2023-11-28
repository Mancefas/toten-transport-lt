import { NextIntlClientProvider } from 'next-intl';
import { render, screen, fireEvent } from '@/test-utils';
import { Footer } from './Footer';
import TranslationsENG from '@/messages/en.json';

const component = () =>
  render(
    <NextIntlClientProvider locale="en" messages={TranslationsENG}>
      <Footer />
    </NextIntlClientProvider>
  );

describe('Footer tests', () => {
  it('renders Footer with ENG text', () => {
    component();
    expect(
      screen.getByText((content) => content.trim().includes(TranslationsENG.Footer.rights))
    ).toBeInTheDocument();
  });

  it('renders links', () => {
    component();
    expect(screen.getByText(TranslationsENG.Footer.fbLink.label)).toHaveAttribute(
      'href',
      TranslationsENG.Footer.fbLink.link
    );
  });

  it('show working time when open hours pressed', () => {
    component();
    const button = screen.getByText(TranslationsENG.WorkingTime.working);

    fireEvent.click(button);

    expect(screen.getAllByText(TranslationsENG.WorkingTime.time)).toBeTruthy();
  });
});
