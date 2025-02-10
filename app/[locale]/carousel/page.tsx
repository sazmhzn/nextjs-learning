import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "end", dragFree: true };

const SLIDES = [
  { id: 1, image: "/images/pokemon1.jpg" },
  { id: 2, image: "/images/pokemon2.jpg" },
  { id: 3, image: "/images/pokemon3.jpg" },
  { id: 4, image: "/images/pokemon4.jpg" },
  { id: 5, image: "/images/pokemon5.jpg" },
];

export default function Carousel() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <div className="container max-w-full bg-red-400">
        <header className="md:mb-12">
          <h1 className="text-white ml-6 tracking-tighter text-balance text-[clamp(2rem,7vw,6rem)]">
            Pokemons
          </h1>
        </header>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}
