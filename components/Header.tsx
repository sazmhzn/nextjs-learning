import React from "react";
import LangSwitcher from "./LangSwitcher";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Index.nav");
  return (
    <header className="bg-red-300 h-14 row-start-3 flex gap-6 flex-wrap items-center justify-between px-8 fixed top-0 max-w-full w-full z-10">
      <div className="flex gap-6">
        <Link href={"/"}>{t("home")}</Link> {t("header")}
        <Link href="/carousel"> Carousel </Link>
      </div>
      <LangSwitcher />
    </header>
  );
};

export default Header;
