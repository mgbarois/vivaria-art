function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[960px] flex-wrap-reverse items-center justify-center gap-12 px-5 pt-10 pb-16 text-center sm:justify-start sm:px-6 sm:pt-14 sm:text-left"
    >
      <div className="flex-[1_1_340px]">
        <p className="mb-2 text-[0.8rem] uppercase tracking-[0.08em] text-ink-soft">
          Welcome to
        </p>
        <div className="flex items-center justify-center sm:justify-start gap-4">
          <img
            src="/hero-title.png"
            alt="Vivaria brand name"
            height={36}
            className="hidden sm:block h-26 w-auto sm:h-28 sm:w-auto mb-4"
          />
          <img
            src="/hero-title-centered.png"
            alt="Vivaria brand name"
            height={36}
            className="sm:hidden h-20 w-auto mb-4"
          />
        </div>

        <p className="mx-auto max-w-[46ch] text-[1.1rem] sm:mx-0">
          by Madeleine Barois
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-4 sm:justify-start">
          <a className="btn-primary" href="#shop">
            Shop the art
          </a>
          <a className="btn-ghost" href="#blurb">
            Learn more
          </a>
        </div>
      </div>

      <div className="h-[280px] w-[280px] flex-none sm:h-[320px] sm:w-[320px]">
        <img
          src="/luna-moth.png"
          alt="Illustrated symmetrical moth artwork by Madeleine Barois"
          className="block h-full w-full object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]"
        />
      </div>
    </section>
  );
}

export default Hero;
