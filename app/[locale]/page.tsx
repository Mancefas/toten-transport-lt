'use client';
import Link from 'next-intl/link';
 
import {useTranslations} from 'next-intl';
 
export default function Index() {
  const t = useTranslations('index');
  return( 
  <>
  <h1>{t('firstText')}</h1>
  <Link href="/" locale="en">Switch to English</Link>
  <br />
  <Link href="/" locale="lt">Switch to Lithuanian</Link>
  </>)
}