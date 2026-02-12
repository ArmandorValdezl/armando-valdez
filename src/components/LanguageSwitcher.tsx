"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const toggleLocale = () => {
    const nextLocale = locale === "en" ? "es" : "en";
    router.replace(
        // @ts-expect-error -- TypeScript doesn't know that params matches the routing
        {pathname, params},
        {locale: nextLocale}
      );
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-3 py-1 text-sm font-bold border border-cyan-400 rounded-md text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
