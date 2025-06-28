import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Carousel({ slides = [], render }) {
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
    },
    [autoplay]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((group, index) => (
            <div key={index} className="embla__slide w-full">
              {render(group)}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white px-3 py-2 rounded-full transition"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/70 text-white px-3 py-2 rounded-full transition"
      >
        ›
      </button>
    </div>
  );
}
