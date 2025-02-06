"use client";

import { useLocale } from "next-intl";
import { locales } from "@/config";
import { usePathname, useRouter } from "next/navigation";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    const pathWithoutLocale = pathname.replace(/^\/(en|np)/, ""); // Remove existing locale
    router.replace(`/${newLocale}${pathWithoutLocale}`); // Navigate to the new locale path
  };

  return (
    <select
      className="bg-black text-white p-2 rounded"
      value={locale}
      onChange={handleChange}
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
