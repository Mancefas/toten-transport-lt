import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitchSelect from './LocaleSwitchSelect';
import { locales } from '@/lib/navigation';

export default function LocaleSwitch() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitchSelect defaultValue={locale}>
      {locales.map((current) => (
        <option key={current} value={current}>
          {t('locale', {locale: current})}
        </option>
      ))}
    </LocaleSwitchSelect>
  );
}
