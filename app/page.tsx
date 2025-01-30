import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-0 px-4">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-8">
        <div className="neo-brutal-border p-8 bg-[#00ffff] mb-8 text-center">
          <div className="mb-8">
            <Image
              src="/assets/images/logo.png"
              alt="Hawkathon Logo"
              width={700}
              height={300}
              className="mx-auto"
              priority
            />
          </div>
          <div className="mb-8">
            <Image
              src="/assets/images/im1.png"
              alt="Omdena Student Chapter"
              width={200}
              height={50}
              className="mx-auto"
            />
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Welcome to the most ridiculous hackathon of 2025! Where serious
            ideas go to die, and absurdity reigns supreme. 🎪
          </p>
          <Link
            href="/register"
            className="neo-brutal-button inline-block text-xl"
          >
            Join the Circus! 🎭
          </Link>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { title: "WHERE!?", desc: "AB 224 (Yes, that's a real place)" },
            {
              title: "WHEN!?",
              desc: "FEB 22, 2025 (Mark your calendar... or don't)",
            },
            {
              title: "TIME!?",
              desc: "10:00 AM to 10:90 AM (Yes, you read that right)",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="neo-brutal-border neo-brutal-shadow p-6 bg-[#FFD700] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
            >
              <h3 className="text-4xl font-bold mb-2">{item.title}</h3>
              <p className="text-xl">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Participate */}
        <div className="neo-brutal-border p-8 bg-[#ff00ff] mb-8">
          <h2 className="text-4xl font-bold mb-6">
            WHY ON EARTH WOULD YOU PARTICIPATE?
          </h2>
          <div className="space-y-4">
            {[
              "Because your normal projects are too mainstream 😎",
              "Meet fellow weirdos who think outside the universe, let alone the box 🌌",
              "Win prizes for being absolutely ridiculous (yes, really!) 🏆",
              "Create something so absurd it might just work (or not, who cares?) 🤪",
            ].map((item, i) => (
              <div key={i} className="neo-brutal-border bg-white px-4 py-2">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="neo-brutal-border p-8 bg-white text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">
            READY TO LOSE YOUR SANITY?
          </h2>
          <div className="space-x-4">
            <Link
              href="/register"
              className="neo-brutal-button inline-block text-xl"
            >
              Embrace the Chaos
            </Link>
            <Link
              href="/about"
              className="neo-brutal-button inline-block text-xl bg-white"
            >
              Still Not Convinced?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
