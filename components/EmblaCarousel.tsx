"use client";

import React, { useCallback, useEffect } from "react";
import {
  EmblaOptionsType,
  EmblaCarouselType,
  EmblaEventType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./embla.module.sass";
import Image from "next/image";

type PropType = {
  slides: { id: number; image: string }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const logEmblaEvent = useCallback(
    (emblaApi: EmblaCarouselType, eventName: EmblaEventType) => {
      console.log(`Embla just triggered ${eventName}!`);
      console.log(emblaApi.containerNode);
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    if (emblaApi) emblaApi.on("slideFocus", logEmblaEvent);
  }, [emblaApi, logEmblaEvent]);

  return (
    <section className={`max-w-full mb-12 ${styles.embla}`}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={`${styles.embla__container}`}>
          {slides.map((slide) => (
            <div className={`${styles.embla__slide}`} key={slide.id}>
              <Image
                alt={`${slide.id} image`}
                src={slide.image}
                className="object-cover w-full h-full"
                width={300}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
