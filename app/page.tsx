import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-8">
        <div className="neo-brutal-card p-8 bg-gray-150 mb-8 text-center relative overflow-hidden">
          <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
          <div className="relative z-10 flex justify-center items-center gap-4 m-4">
            <Link
              href="https://www.omdena.com/local-chapters/vit-bhopal-university"
              target="_blank"
            >
              <Image
                src="/assets/images/im1.png"
                alt="Omdena Student Chapter"
                className="h-auto w-auto max-w-[200px] max-h-[50px] object-contain"
                width={300}
                height={300}
              />
            </Link>
            <span className="text-3xl text-black">|</span>
            <Link
              href="https://www.aivitb.com/"
              target="_blank"
            >
              <Image
                src="/assets/images/im2.png"
                alt="AI Club"
                className="h-auto w-auto max-w-[72px] max-h-[72px] object-contain"
                width={300}
                height={300}
              />
            </Link>
          </div>
          <div className="relative z-10 flex justify-center items-center text-3xl comic-text-2 text-gray-800 my-2">
            presents
          </div>
          <div className="relative z-10 mb-4">
            <Image
              src="/assets/images/logo.png"
              alt="Hawkathon Logo"
              width={800}
              height={300}
              className="mx-auto transform -rotate-4"
              priority
            />
          </div>

          <p className="comic-text text-3xl mb-10 max-w-2xl mx-auto text-white">
            An epic project showcase like never before! 🎭
          </p>
          <Link
            href="/register"
            className="neo-brutal-button inline-block text-2xl transform mb-4"
          >
            <span className="comic-text-2 px-8 text-3xl">Register Now</span>
          </Link>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            {
              title: "WHERE!?",
              desc: "AB 224"
            },
            {
              title: "WHEN!?",
              desc: "FEB 22, 2025",
            },
            {
              title: "TIME!?",
              desc: "10:00 AM to 12:30 PM",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="neo-brutal-card p-6 bg-[#f202a1] hover:bg-pink-500 transition-colors duration-300 text-center text-white"
            >
              <h3 className="text-2xl comic-text-2 mb-2 text-gray-200">{item.title}</h3>
              <p className="text-4xl comic-text text-white">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Why Participate */}
        <div className="neo-brutal-card p-8 bg-green-400 mb-8 relative overflow-hidden">
          <div className="comic-lines absolute inset-0 opacity-20"></div>
          <h2 className="comic-text mb-6 text-white">
            WHY ON EARTH SHOULD YOU PARTICIPATE?
          </h2>
          <div className="space-y-4">
            {[
              "Get a chance to be selected for Omdena's 5th international project! 🎉",
              "Certificates for everyone, no one gets left behind 📜",
              "There won't be a second hawkathoon 💔"
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
            So would you participate?
          </h2>
          <div className="space-y-4">
            <Link
              href="/register"
              className="neo-brutal-button inline-block text-2xl bg-[#fe9308] transform px-20 mx-4"
            >
              Hell Yeah ‼
            </Link>
            <Link
              href="/about"
              className="neo-brutal-button inline-block text-2xl bg-[#fe9308] transform bg-cyan-300 transform px-8 mx-4"
            >
              I wanna know more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
