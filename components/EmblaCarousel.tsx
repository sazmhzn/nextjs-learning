"use client";

import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import styles from "./embla.module.sass";

type PropType = {
  slides: { id: number; image: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = ({ slides, options }: PropType) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const logEmblaEvent = useCallback(
    (emblaApi: EmblaCarouselType, eventName: EmblaEventType) => {
      console.log(`Embla just triggered ${eventName}!`);
      console.log(emblaApi.containerNode);
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    if (emblaApi) emblaApi.on("slideFocus", logEmblaEvent);
  }, [emblaApi, logEmblaEvent]);

  return (
    <section className={`mb-12 ${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={`${styles.embla__container}`}>
          {slides.map((slide) => (
            <div className={`${styles.embla__slide}`} key={slide.id}>
              <Image
                alt={`${slide.id} image`}
                src={slide.image}
                className="h-full w-full object-cover"
                width={300}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
