import Image from "next/image";

const spaces = [
  {
    title: "Living Spaces",
    description:
      "Thoughtfully arranged spaces designed for comfort, relaxation and everyday living.",
    image: "/images/furaha/living-room.jpeg",
  },
  {
    title: "Bedrooms",
    description:
      "Comfortable private spaces created to give you a peaceful place to unwind.",
    image: "/images/furaha/bedroom.jpeg",
  },
  {
    title: "Dining & Kitchen",
    description:
      "Beautifully presented spaces for preparing meals, dining and spending time together.",
    image: "/images/furaha/kitchen.jpeg",
  },
];
export default function PropertyShowcase() {
  return (
    <section className="bg-white px-6 py-24 sm:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">

          <div className="lg:col-span-7">

            <div className="flex items-center gap-3">

              <span className="h-px w-10 bg-[#C9A227]"></span>

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#164A8A]">
                Inside Furaha
              </p>

            </div>

            <h2 className="mt-6 max-w-3xl text-4xl font-light leading-tight text-[#0B1F3A] sm:text-5xl lg:text-6xl">
              A closer look at
              <span className="block font-serif italic text-[#C9A227]">
                Furaha.
              </span>
            </h2>

          </div>

          <div className="lg:col-span-5">

            <p className="max-w-md text-base leading-7 text-[#0B1F3A]/60">
              Step inside Furaha Executive Residency and discover spaces
              designed around comfort, elegance and a welcoming atmosphere.
            </p>

          </div>

        </div>


        {/* Spaces */}
        <div className="mt-16 space-y-24">

          {spaces.map((space, index) => (

            <div
              key={space.title}
              className={`grid gap-10 lg:grid-cols-12 lg:items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* Image */}
              <div
                className={`lg:col-span-8 ${
                  index % 2 !== 0 ? "lg:col-start-5" : ""
                }`}
              >
                <div className="group relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={space.image}
                    alt={`${space.title} at Furaha Executive Residency`}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                  />

                </div>
              </div>


              {/* Text */}
              <div
                className={`lg:col-span-4 ${
                  index % 2 !== 0
                    ? "lg:col-start-1 lg:row-start-1"
                    : ""
                }`}
              >

                <span className="text-xs tracking-[0.25em] text-[#C9A227]">
                  0{index + 1}
                </span>

                <h3 className="mt-4 text-3xl font-light text-[#0B1F3A]">
                  {space.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#0B1F3A]/60">
                  {space.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}