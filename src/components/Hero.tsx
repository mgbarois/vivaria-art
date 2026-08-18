function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-[960px] flex-wrap-reverse items-center justify-center gap-12 px-5 pt-10 pb-16 text-center sm:justify-start sm:px-6 sm:pt-14 sm:text-left"
    >
      <div className="flex-[1_1_340px]">
        <p className="mb-2 text-[0.8rem] uppercase tracking-[0.08em] text-ink-soft">Welcome to</p>
        <h1 className="text-[clamp(2.4rem,6vw,3.6rem)]">
          Vivaria Art &amp; Designs
        </h1>
        <p className="mx-auto max-w-[46ch] text-[1.1rem] sm:mx-0">by Madeleine Barois</p>
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
  )
}

export default Hero
