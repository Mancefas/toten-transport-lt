'use client';

import ContactsAccordion from '@/components/ContactsAccordion/ContactsAccordion';

import contactsTranslations from '@/dictionaries/contacts/en.json';

export default function ContactsPage() {
  return <ContactsAccordion text={contactsTranslations} />;
}
