import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function Banner() {
  const autoplay = Autoplay({ delay: 4000, stopOnInteraction: false });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "center",
      loop: true,
    },
    [autoplay]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const slides = [1, 2, 3, 4, 5]; // represents slide groups (each with 2 images)

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((_, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-full px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2].map((box) => (
                  <div key={box} className="shadow h-72">
                    <img
                      className="rounded-sm h-full w-full object-cover"
                      src="http://media.istockphoto.com/id/182689167/photo/six-hands-catching-clouds-blue-sky.jpg?s=2048x2048&w=is&k=20&c=TUuRxvbBFVfvtWSzHAqszSIgPIZZMha5CXM7q15LQyI="
                      alt="Carousel"
                    />
                  </div>
                ))}
              </div>
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
