'use client';

import ContactsAccordion from '@/components/ContactsAccordion/ContactsAccordion';

import contactsTranslation from '@/dictionaries/contacts/lt.json';

export default function ContactUsLT() {
  return <ContactsAccordion text={contactsTranslation} />;
}
