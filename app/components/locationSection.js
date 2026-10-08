import Image from "next/image";

const googleMapsUrl =
  "https://maps.app.goo.gl/Rh6aqKqf29B1AsvG8?g_st=iw";

export default function LocationSection() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
        
        {/* Text */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#C9A227]" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#164A8A]">
              Find Furaha
            </p>
          </div>

          <h2 className="mt-6 text-4xl font-light leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
            Come and experience
            <span className="block font-serif italic text-[#C9A227]">
              Furaha.
            </span>
          </h2>

          <p className="mt-6 max-w-md text-base leading-7 text-[#0B1F3A]/60">
            Conveniently located in Ihumwa, Furaha Executive Residency offers
            a comfortable and welcoming place to stay.
          </p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#164A8A]">
              Location
            </p>

            <p className="mt-2 text-base text-[#0B1F3A]">
              Ihumwa, Dodoma, Tanzania
            </p>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center bg-[#0B1F3A] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#164A8A]"
          >
            Get Directions
            <span className="ml-3">→</span>
          </a>
        </div>

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#F8F7F3] lg:col-span-7">
          <Image
             src="/images/furaha/exterior.png"
            alt="Location of Furaha Executive Residency in Ihumwa, Dodoma"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 58vw"
          />

          <div className="absolute inset-0 bg-[#0B1F3A]/25" />

          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-20 w-20 items-center justify-center rounded-full border border-[#E5D39A] bg-[#0B1F3A]/80 transition hover:scale-105"
              aria-label="Open Furaha Executive Residency in Google Maps"
            >
              <span className="text-2xl text-[#C9A227]">+</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}