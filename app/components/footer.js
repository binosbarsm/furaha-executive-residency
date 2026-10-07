import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#07162A] px-6 py-14 text-white lg:px-10">

      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link href="/" className="inline-block">

              <p className="text-lg font-semibold tracking-[0.3em]">
                FURAHA
              </p>

              <p className="mt-1 text-[9px] tracking-[0.3em] text-[#C9A227]">
                EXECUTIVE RESIDENCY
              </p>

            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              A welcoming residence designed around comfort, privacy and
              beautiful living.
            </p>

          </div>


          {/* Explore */}
          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#E5D39A]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">

              <Link
                href="/"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Home
              </Link>

              <a
                href="#inside-furaha"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Inside Furaha
              </a>

              <a
                href="#contact"
                className="text-sm text-white/60 transition hover:text-white"
              >
                Contact
              </a>

            </div>

          </div>


          {/* Contact */}
          <div>

            <p className="text-xs uppercase tracking-[0.2em] text-[#E5D39A]">
              Contact
            </p>

            <div className="mt-5 space-y-3">

<a
  href="tel:+255706552426"
  className="block text-sm text-white/60 transition hover:text-white"
>
  +255706552426
</a>

<a
  href="tel:+255771927774"
  className="block text-sm text-white/60 transition hover:text-white"
>
  +255771927774
</a>

<a
  href="mailto:binosbarsm@gmail.com"
  className="block text-sm text-white/60 transition hover:text-white"
>
  binosbarsm@gmail.com
</a>

            </div>

          </div>

        </div>


        {/* Bottom */}
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">

          <p>
           © 2026 Furaha Executive Residency. All rights reserved.
            All rights reserved.
          </p>

          <p>
            Comfort · Elegance · Belonging
          </p>

        </div>

      </div>

    </footer>
  );
}