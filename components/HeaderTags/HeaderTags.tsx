import Head from "next/head";

import { useLanguageContext } from '@/context/LanguageContext';
import * as ltTranslations from '@/dictionaries/headerTags/lt.json'
import * as enTranslations from '@/dictionaries/headerTags/en.json'

const HeaderTags = () => {
  const { selectedLanguage } = useLanguageContext();

  return (
    <Head>
      <title>
        {selectedLanguage === 'ltu' ? ltTranslations.title : enTranslations.title}
      </title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
   
      <meta
        name="description"
        content={selectedLanguage === 'ltu' ? ltTranslations.description : enTranslations.description}
      />
  </Head>
  );
};

export default HeaderTags;
