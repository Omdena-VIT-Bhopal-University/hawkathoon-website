import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-8">
        <div className="neo-brutal-card p-8 bg-cyan-300 mb-8 text-center relative overflow-hidden">
          <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
          <div className="mb-8 relative z-10">
            <Image
              src="/assets/images/logo.png"
              alt="Hawkathon Logo"
              width={700}
              height={300}
              className="mx-auto transform rotate-2"
              priority
            />
          </div>
          <div className="mb-8 relative z-10">
            <Image
              src="/assets/images/im1.png"
              alt="Omdena Student Chapter"
              width={200}
              height={50}
              className="mx-auto transform -rotate-3"
            />
          </div>
          <p className="comic-text text-3xl mb-8 max-w-2xl mx-auto text-white">
            Welcome to the most RIDICULOUS hackathon of 2025! Where serious
            ideas go to DIE, and ABSURDITY reigns supreme! 🎪
          </p>
          <Link
            href="/register"
            className="neo-brutal-button inline-block text-2xl transform rotate-3"
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
              className="neo-brutal-card p-6 bg-pink-400 hover:bg-pink-500 transition-colors duration-300"
            >
              <h3 className="comic-text mb-2">{item.title}</h3>
              <p className="text-xl font-comic">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Participate */}
        <div className="neo-brutal-card p-8 bg-green-400 mb-8 relative overflow-hidden">
          <div className="comic-lines absolute inset-0 opacity-20"></div>
          <h2 className="comic-text mb-6 text-white">
            WHY ON EARTH WOULD YOU PARTICIPATE?
          </h2>
          <div className="space-y-4">
            {[
              "Because your normal projects are too mainstream 😎",
              "Meet fellow weirdos who think outside the universe, let alone the box 🌌",
              "Win prizes for being absolutely ridiculous (yes, really!) 🏆",
              "Create something so absurd it might just work (or not, who cares?) 🤪",
            ].map((item, i) => (
              <div
                key={i}
                className="neo-brutal-card bg-white px-4 py-2 transform rotate-1"
              >
                <p className="font-comic text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="neo-brutal-card p-8 bg-purple-400 text-center mb-8 relative overflow-hidden">
          <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
          <h2 className="comic-text mb-6 text-white">
            READY TO LOSE YOUR SANITY?
          </h2>
          <div className="space-x-4">
            <Link
              href="/register"
              className="neo-brutal-button inline-block text-2xl bg-yellow-400 transform -rotate-2"
            >
              Embrace the Chaos
            </Link>
            <Link
              href="/about"
              className="neo-brutal-button inline-block text-2xl bg-cyan-300 transform rotate-2"
            >
              Still Not Convinced?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
