import Link from "next/link";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        
        {/* Logo */}
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-[#C9A227] text-[#C9A227]">
              F
            </div>

            <div>
              <p className="text-sm font-semibold tracking-[0.25em] text-white">
                FURAHA
              </p>
              <p className="text-[9px] tracking-[0.2em] text-[#E5D39A]">
                EXECUTIVE RESIDENCY
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-10 md:flex">
        <Link
  href="/"
  className="text-sm text-white transition hover:text-[#E5D39A]"
>
  Home
</Link>

<a
  href="#inside-furaha"
  className="text-sm text-white transition hover:text-[#E5D39A]"
>
  Inside Furaha
</a>

<a
  href="#contact"
  className="text-sm text-white transition hover:text-[#E5D39A]"
>
  Contact
</a>

    <a
  href="#contact"
  className="border border-[#C9A227] px-5 py-3 text-sm text-white transition hover:bg-[#C9A227] hover:text-[#0B1F3A]"
>
  Get in touch
</a>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="h-px w-7 bg-white"></span>
          <span className="h-px w-7 bg-white"></span>
          <span className="h-px w-5 self-end bg-white"></span>
        </button>

      </nav>
    </header>
  );
}