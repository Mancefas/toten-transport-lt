import { NextIntlClientProvider } from 'next-intl';
import { render, screen } from '@/test-utils';
import { ContactsAccordion } from './ContactsAccordion';
import TranslationsENG from '@/messages/en.json';

// only checking for one item from translations to render, because using next-intl and it should be tested to render all
// not checking press of accordion button action, because using Mantine UI library and that component should be tested by Mantine
const contactsValuesAmount = Object.keys(TranslationsENG.Contacts).length;

describe('ContactsAccordion', () => {
  it('should render ENG translated text', () => {
    render(
      <NextIntlClientProvider locale="en" messages={TranslationsENG}>
        <ContactsAccordion />
      </NextIntlClientProvider>
    );
    // check if it renders correct text (once)
    expect(screen.getByText(TranslationsENG.Contacts.Vad.name)).toBeInTheDocument();
    // check if it renders correct amount of buttons
    expect(screen.getAllByRole('button').length).toBe(contactsValuesAmount);
  });
});
