export default function Introduction() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-12 lg:items-end">

          {/* Small label */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C9A227]"></span>

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#164A8A]">
                The Furaha Experience
              </p>
            </div>
          </div>

          {/* Main text */}
          <div className="lg:col-span-9">

            <h2 className="max-w-4xl text-4xl font-light leading-tight tracking-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              More than a residence.
              <span className="block font-serif italic text-[#C9A227]">
                A place to belong.
              </span>
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">

              <p className="text-base leading-8 text-[#0B1F3A]/65">
                At Furaha Executive Residency, we believe that where you live
                should feel as comfortable as it feels beautiful.
              </p>

              <p className="text-base leading-8 text-[#0B1F3A]/65">
                Our residences are thoughtfully presented for people who value
                comfort, privacy, elegance and a welcoming environment.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}