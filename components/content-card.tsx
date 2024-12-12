import { cn } from "@/lib/utils"

interface ContentCardProps {
  className?: string
  imageUrl: string
  rotation?: string
}

export function ContentCard({ className, imageUrl, rotation = "rotate-0" }: ContentCardProps) {
  return (
    <div
      className={cn(
        "absolute rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105",
        rotation,
        className
      )}
    >
      <img
        src={imageUrl}
        alt="Content creator"
        className="w-[280px] h-[400px] object-cover"
      />
    </div>
  )
}

