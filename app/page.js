import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Introduction from "./components/Introuduction";
import PropertyShowcase from "./components/propertyShowcase";
import FurahaHighlights from "./components/furahaHighlights";
import LocationSection from "./components/locationSection";
import ContactCTA from "./components/contactCTA";
import Footer from "./components/footer";
import HeroSlider from "./components/heroslider";

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-[#0B1F3A]">

  {/* Background image slider */}
  <HeroSlider />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-[#0B1F3A]/65"></div>

  {/* Navbar */}
  <Navbar />

  {/* Hero content */}
  <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-10">
    <div className="max-w-3xl">

      <p className="mb-6 flex items-center gap-4 text-xs font-medium uppercase tracking-[0.35em] text-[#E5D39A]">
        <span className="h-px w-10 bg-[#C9A227]"></span>
        Furaha Executive Residency
      </p>

      <h1 className="max-w-3xl text-5xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-8xl">
        A place to
        <span className="block font-serif italic text-[#E5D39A]">
          call home.
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
        A thoughtfully designed residence where comfort, privacy and
        elegance come together to create a welcoming place to stay.
      </p>

    </div>
  </div>

  {/* Bottom details */}
  <div className="absolute bottom-8 left-0 z-10 w-full">
    <div className="mx-auto flex max-w-7xl items-end justify-between px-6 lg:px-10">

      <p className="hidden text-xs uppercase tracking-[0.25em] text-white/50 sm:block">
        Comfort · Elegance · Belonging
      </p>

      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
        Scroll to explore
        <span className="h-10 w-px bg-[#C9A227]"></span>
      </div>

    </div>
  </div>

</section>

             {/* Introduction */}
      <Introduction />

     {/* shocase property */}
    <div id="inside-furaha">
     <PropertyShowcase />
    </div>
   

        {/* residence highlights */}

    <FurahaHighlights />

       {/* location */}
        <div id="location">
        <LocationSection />
        </div>
      
          {/* contact CTA */}
          <div id="contact">
           <ContactCTA />
          </div>
         

             {/* footer */}

             <Footer />
      
    </main>
  );
}