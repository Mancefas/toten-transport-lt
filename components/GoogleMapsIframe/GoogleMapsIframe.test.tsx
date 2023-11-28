import { NextIntlClientProvider } from 'next-intl';
import { render, screen } from '@/test-utils';
import GoogleMapsIframe from './GoogleMapsIframe';
import TranslationsENG from '@/messages/en.json';

const component = () =>
  render(
    <NextIntlClientProvider locale="en" messages={TranslationsENG}>
      <GoogleMapsIframe />
    </NextIntlClientProvider>
  );

describe('GoogleMapsIframe tests', () => {
  it('renders GoogleMapsIframe with ENG translations', () => {
    component();
    expect(screen.getByText(TranslationsENG.Maps.Office.title)).toBeInTheDocument();
  });

  it('renders iframes that display addresses', () => {
    component();
    expect(screen.getByTitle(TranslationsENG.Maps.Office.iframeTitle)).toBeInTheDocument();
    expect(screen.getByTitle(TranslationsENG.Maps.Warehouse.iframeTitle)).toBeInTheDocument();
  });
});
