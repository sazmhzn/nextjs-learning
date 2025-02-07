import EmblaCarousel from "@/components/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { align: "end", dragFree: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Carousel() {
  return (
    <section className="min-h-[90dvh] flex items-center justify-center">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h1 className="text-4xl font-bold">Pokemons</h1>
        </header>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </section>
  );
}
