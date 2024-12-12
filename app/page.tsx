import { Navbar } from "@/components/navbar"
import { ContentCard } from "@/components/content-card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container pt-32 pb-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-24">
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto leading-tight bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Generate short-clips from your streams all in{" "}
            <span className="font-serif italic">Real-Time</span>
          </h1>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started
          </Button>
        </div>

        {/* Content Cards Section */}
        <div className="relative h-[600px] max-w-5xl mx-auto">
          <ContentCard
            imageUrl="/placeholder.svg?height=400&width=280"
            className="left-0 top-0"
            rotation="-rotate-12"
          />
          <ContentCard
            imageUrl="/placeholder.svg?height=400&width=280"
            className="left-[15%] top-0"
            rotation="-rotate-6"
          />
          <ContentCard
            imageUrl="/placeholder.svg?height=400&width=280"
            className="left-[30%] top-0"
            rotation="-rotate-3"
          />
          <ContentCard
            imageUrl="/placeholder.svg?height=400&width=280"
            className="left-[45%] top-0"
          />
          <ContentCard
            imageUrl="/placeholder.svg?height=400&width=280"
            className="right-[30%] top-0"
            rotation="rotate-3"
          />
          <ContentCard
            imageUrl="/placeholder.svg?height=400&width=280"
            className="right-[15%] top-0"
            rotation="rotate-6"
          />
          <ContentCard
            imageUrl="/placeholder.svg?height=400&width=280"
            className="right-0 top-0"
            rotation="rotate-12"
          />
        </div>
      </main>
    </div>
  )
}

