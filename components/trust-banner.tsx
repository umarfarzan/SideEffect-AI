import Image from "next/image"

export function TrustBanner() {
  return (
    <div className="w-full bg-zinc-900 py-8">
      <div className="container">
        <div className="mb-6 text-center">
          <div className="mb-2 flex items-center justify-center">
            <div className="rounded-lg bg-orange-500/10 p-2">
              <svg
                className=" h-6 w-6 text-orange-500"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
              </svg>
            </div>
            <span className="ml-2 text-2xl font-bold text-white">4.8</span>
          </div>
          <p className="text-sm text-zinc-400">On G2 with 881 reviews</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 grayscale">
          <Image src="/placeholder.svg?text=Microsoft" height={30} width={120} alt="Microsoft" className="h-8 w-auto" />
          <Image src="/placeholder.svg?text=TED" height={30} width={80} alt="TED" className="h-8 w-auto" />
          <Image src="/placeholder.svg?text=Verizon" height={30} width={100} alt="Verizon" className="h-8 w-auto" />
          <Image src="/placeholder.svg?text=iHeart" height={30} width={100} alt="iHeart" className="h-8 w-auto" />
          <Image src="/placeholder.svg?text=NYT" height={30} width={160} alt="NYT" className="h-8 w-auto" />
          <Image
            src="/placeholder.svg?text=Business+Insider"
            height={30}
            width={160}
            alt="Business Insider"
            className="h-8 w-auto"
          />
        </div>
      </div>
    </div>
  )
}

