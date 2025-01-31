import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
     <link rel="icon" href="/favicon.ico" sizes="any" />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-8">
        <div className="neo-brutal-card p-8 bg-cyan-300 mb-8 text-center relative overflow-hidden">
          <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
          <div className="mb-8 relative z-10">
            <Image
              src="/assets/images/logo.png"
              alt="Hawkathon Logo"
              width={800}
              height={300}
              className="mx-auto transform -rotate-4"
              priority
            />
          </div>
          <div className="mb-8 relative z-10 flex justify-center items-center gap-4">
            <Image
              src="/assets/images/im1.png"
              alt="Omdena Student Chapter"
              className="h-auto w-auto max-w-[200px] max-h-[50px] object-contain"
              width={300}
              height={300}
            />
            <span className="text-3xl text-white">|</span>
            <Image
              src="/assets/images/im2.png"
              alt="AI Club"
              className="h-auto w-auto max-w-[72px] max-h-[72px] object-contain"
              width={300}
              height={300}
            />
          </div>


          <p className="comic-text text-3xl mb-8 max-w-2xl mx-auto text-white">
            {/* Welcome to the most RIDICULOUS hackathon of 2025! 🎪 */}
            An epic project showcase like never before! 🎭
            {/* Welcome to the most RIDICULOUS hackathon of 2025! 🎪 */}
          </p>
          <Link
            href="/register"
            className="neo-brutal-button inline-block text-2xl transform"
          >
            Register Now ‼️‼️
          </Link>F
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { title: "WHERE!?", desc: "AB 224" },
            {
              title: "WHEN!?",
              desc: "FEB 22, 2025",
            },
            {
              title: "TIME!?",
              desc: "10:00 AM to 12:30 AM",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="neo-brutal-card p-6 bg-pink-400 hover:bg-pink-500 transition-colors duration-300 text-center"
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
                className="neo-brutal-card bg-white px-4 py-2 transform"
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
          <div className="space-x-16">
            <Link
              href="/register"
              className="neo-brutal-button inline-block text-2xl bg-yellow-400 transform -rotate-1"
            >
              Embrace the Chaos
            </Link>
            <Link
              href="/about"
              className="neo-brutal-button inline-block text-2xl bg-cyan-300 transform -rotate-1"
            >
              Still Not Convinced?
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
