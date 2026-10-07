import Image from "next/image";
import {
  Home,
  BedDouble,
  CookingPot,
  Wifi,
  Car,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: Home,
    title: "3 Private Units",
  },
  {
    icon: BedDouble,
    title: "2 Master Bedrooms",
  },
  {
    icon: CookingPot,
    title: "Private Kitchen",
  },
  {
    icon: Wifi,
    title: "Reliable Wi-Fi",
  },
  {
    icon: Car,
    title: "Secure Parking",
  },
  {
    icon: ShieldCheck,
    title: "Security",
  },
];

export default function FurahaHighlights() {
  return (
    <section className="bg-[#F8F7F3] px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center">

        {/* Image */}
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[4/3] lg:col-span-6 lg:aspect-[4/5]">

          <Image
            src="/images/furaha/bedroom.jpeg"
            alt="Comfortable bedroom at Furaha Executive Residency"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="absolute inset-0 bg-[#0B1F3A]/10" />

        </div>


        {/* Content */}
        <div className="lg:col-span-6 lg:pl-10">

          <div className="flex items-center gap-3">

            <span className="h-px w-10 bg-[#C9A227]" />

            <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#164A8A]">
              At Furaha
            </p>

          </div>


          <h2 className="mt-6 max-w-xl text-4xl font-light leading-tight text-[#0B1F3A] sm:text-5xl">
            Everything you need,
            <span className="block font-serif italic text-[#C9A227]">
              right where you are.
            </span>
          </h2>


          <p className="mt-6 max-w-lg text-sm leading-7 text-[#0B1F3A]/60">
            Thoughtfully arranged spaces and essential comforts come together
            to make your stay easy, private and enjoyable.
          </p>


          {/* Highlights */}
          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7">

            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C9A227]/40 text-[#C9A227]">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <p className="text-sm font-medium text-[#0B1F3A]">
                    {item.title}
                  </p>

                </div>
              );
            })}

          </div>


          {/* Closing statement */}
          <div className="mt-10 border-l-2 border-[#C9A227] pl-5">

            <p className="text-sm italic leading-6 text-[#0B1F3A]/60">
              Comfort, privacy and a welcoming atmosphere — all in one place.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}