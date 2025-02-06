import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  // const lang = (await params).locale;
  // const dict = await getDictionary(lang);
  const t = useTranslations("Index");

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ">
      <main className="flex flex-col gap-8 items-center justify-center sm:items-start">
        <h1 className="">{t("title")}</h1>

        <Image
          alt="random image"
          src={"https://picsum.photos/200"}
          width={200}
          height={200}
        />
        <Link href={"/pokemon"}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Pokemon
          </button>
        </Link>
      </main>
    </div>
  );
}
