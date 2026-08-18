import { useRef } from "react";
import { caraProfile, portfolioImages } from "../data/links.ts";
import { ChevronIcon, ExternalLinkIcon } from "./icons.tsx";

function Portfolio() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 260) + 20;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section id="portfolio" className="section">
      <h2>Portfolio</h2>
      <p className="mx-auto mb-8 max-w-[50ch] text-center">
        A sample of original watercolor and ink pieces. See the full collection
        on my Cara profile.
      </p>

      <div className="relative">
        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {portfolioImages.map((image) => (
            <div
              key={image.src}
              data-card
              className="w-[220px] flex-none snap-start overflow-hidden rounded-[14px] border border-border bg-forest sm:w-[260px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="block h-[220px] w-full object-cover sm:h-[260px]"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll to previous artwork"
          onClick={() => scrollByCard(-1)}
          className="absolute top-1/2 left-0 hidden -translate-x-3 -translate-y-1/2 rounded-full border border-border bg-ink/85 p-2 text-paper hover:border-accent hover:text-accent-soft sm:flex"
        >
          <ChevronIcon className="h-5 w-5 rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Scroll to next artwork"
          onClick={() => scrollByCard(1)}
          className="absolute top-1/2 right-0 hidden translate-x-3 -translate-y-1/2 rounded-full border border-border bg-ink/85 p-2 text-paper hover:border-accent hover:text-accent-soft sm:flex"
        >
          <ChevronIcon className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-8 text-center">
        <a
          href={caraProfile.url}
          target="_blank"
          rel="noreferrer"
          className="btn-primary inline-flex items-center gap-2"
        >
          View full portfolio on Cara
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

export default Portfolio;
