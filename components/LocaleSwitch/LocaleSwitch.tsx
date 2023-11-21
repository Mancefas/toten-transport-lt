import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitchSelect from './LocaleSwitchSelect';
import { locales } from '@/lib/navigation';

import classes from './LocalSwitch.module.css';

export default function LocaleSwitch() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <LocaleSwitchSelect defaultValue={locale}>
      {locales.map((current) => (
        <option key={current} value={current} className={classes.option}>
          {t('locale', {locale: current})}
        </option>
      ))}
    </LocaleSwitchSelect>
  );
}


// import { useTransition, useState, useEffect} from 'react';
// import { Select } from '@mantine/core';

// import {useLocale, useTranslations} from 'next-intl';
// import { locales, useRouter, usePathname } from '@/lib/navigation';
// import classes from './LocalSwitch.module.css';




// export default function LocaleSwitch() {
//   const t = useTranslations('LocaleSwitcher');
//   const locale = useLocale();

//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const pathname = usePathname();

//   const [value, setValue] = useState(locale);

//   useEffect(() => {
//     onSelectChange(value.toLocaleLowerCase())
//   }, [value])

//   const onSelectChange = (value: string) => {
//     const nextLocale = value;
//     startTransition(() => {
//       router.replace(pathname, {locale: nextLocale});
//     });
//   }

//   return (
//     // <LocaleSwitchSelect defaultValue={locale}>
//     //   {locales.map((current) => (
//     //     <option key={current} value={current}>
//     //       {t('locale', {locale: current})}
//     //     </option>
//     //   ))}
//     // </LocaleSwitchSelect>
//     <Select 
     
//       classNames={{wrapper: classes.wrapper}}
//       variant="unstyled"
//       disabled={isPending}
//       data={locales.map((current) => (current.toUpperCase()))} 
//       value={locale.toUpperCase()} 
//       onChange={setValue} />
//   );
// }
