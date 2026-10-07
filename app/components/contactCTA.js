import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-[#0B1F3A] px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">

        <div className="mx-auto flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#C9A227]" />

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#E5D39A]">
            Get in touch
          </p>

          <span className="h-px w-10 bg-[#C9A227]" />
        </div>


        <h2 className="mt-8 text-4xl font-light leading-tight text-white sm:text-5xl lg:text-7xl">
          Your next stay
          <span className="block font-serif italic text-[#C9A227]">
            starts here.
          </span>
        </h2>


        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/60">
          Have a question or would like to know more about Furaha Executive
          Residency? We&aposd love to hear from you.
        </p>


        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

<a
  href="https://wa.me/255753686744?text=Hello%20Furaha%20Executive%20Residency%2C%20I%20would%20like%20to%20know%20more%20about%20your%20accommodation."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center bg-[#C9A227] px-8 py-4 text-sm font-medium text-[#0B1F3A] transition hover:bg-[#E5D39A]"
>
  WhatsApp us
  <span className="ml-3">→</span>
</a>

          <a
            href="tel:+255753686744"
            className="inline-flex items-center justify-center border border-white/30 px-8 py-4 text-sm font-medium text-white transition hover:border-[#C9A227] hover:text-[#E5D39A]"
          >
            Call us
          </a>

        </div>

      </div>
    </section>
  );
}