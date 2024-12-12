import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tighter">
          SIDE PROJECT
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium">
            Home
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground">
            About Us
          </Link>
          <Link href="/pricing" className="text-muted-foreground hover:text-foreground">
            Pricing
          </Link>
          <Link href="/features" className="text-muted-foreground hover:text-foreground">
            Features
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </nav>
  )
}

