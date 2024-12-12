import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="SIDE-EFFECT" width={24} height={24} />
          <span className="text-sm font-semibold uppercase tracking-wide text-white">SIDE-EFFECT</span>
        </Link>
        <div className="flex items-center space-x-8">
          <nav className="hidden space-x-8 md:flex">
            <Link href="/pricing" className="text-sm text-gray-200 hover:text-white">
              Pricing
            </Link>
            <Link href="/features" className="text-sm text-gray-200 hover:text-white">
              Features
            </Link>
            <Link href="/about-us" className="text-sm text-gray-200 hover:text-white">
              About Us
            </Link>
          </nav>
          <Link
            href="/login"
            className="rounded-md bg-zinc-800/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm hover:bg-zinc-800/70"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

