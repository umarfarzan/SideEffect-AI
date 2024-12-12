import Image from "next/image";

export function TrustSection() {
  return (
    <section className="w-full bg-zinc-900 py-16">
      <div className="container px-6 mx-auto">
        <p className="mb-6 text-center text-lg font-semibold text-white">
          Trusted by individuals & businesses
        </p>
        <div className="mb-6 flex items-center justify-center">
          <div className="flex items-center space-x-3 rounded-lg bg-white/10 px-4 py-3 shadow-lg">
            <Image src="/g2-logo.png" alt="G2 logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-2xl font-extrabold text-white">4.8</span>
            <div className="flex text-orange-400">
              {"★★★★★".split("").map((star, i) => (
                <span key={i}>{star}</span>
              ))}
            </div>
          </div>
        </div>
        <p className="mb-10 text-center text-base text-zinc-400">
          Rated on G2 with 881 reviews
        </p>
        <div className="grid grid-cols-2 gap-6 grayscale md:grid-cols-3 lg:grid-cols-6">
          {["npr", "ted", "verizon", "microsoft", "iheart", "nyt"].map((logo, index) => (
            <Image
              key={index}
              src={`/${logo}-logo.png`}
              alt={`${logo.toUpperCase()} logo`}
              width={120}
              height={30}
              className="h-10 w-auto opacity-75 transition hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
