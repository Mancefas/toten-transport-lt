'use client';

import {ChangeEvent, ReactNode, useTransition} from 'react';
import {useRouter, usePathname} from '@/lib/navigation';

type Props = {
  children: ReactNode;
  defaultValue: string;
};

export default function LocaleSwitchSelect({
  children,
  defaultValue,
}: Props) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, {locale: nextLocale});
    });
  }

  return (
    <label>
      <select
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}
