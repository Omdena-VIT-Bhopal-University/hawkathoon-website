import Image from "next/image";

export default function About() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          <div className="neo-brutal-card p-8 bg-cyan-300 relative overflow-hidden">
            <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
            <h1 className="comic-text text-5xl mb-6 text-white">
              What's This Madness About? 🎭
            </h1>
            <p className="text-lg font-comic">
              Welcome to Hawkathoon'25, where we've thrown sanity out the
              window! This isn't your typical boring hackathon - it's a 1.5-hour
              festival of absurdity where we celebrate the most ridiculous,
              outrageous, and entertainingly useless solutions to problems that
              probably don't exist!
            </p>
          </div>
          <div className="neo-brutal-card p-4 bg-pink-400 transform -rotate-2">
            <Image
              src="/assets/images/poster.png"
              alt="Hawkathoon Poster"
              width={600}
              height={600}
              className="w-full h-full object-cover neo-brutal-border"
            />
          </div>
        </div>

        {/* Event Details */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          <div className="neo-brutal-card p-8 bg-purple-400 relative overflow-hidden">
            <div className="comic-lines absolute inset-0 opacity-20"></div>
            <h2 className="comic-text text-4xl mb-6 text-white">
              The Not-So-Fine Print 📜
            </h2>
            <div className="space-y-4">
              {[
                "1.5 hours of pure chaos starting Feb 22, 2025 (yes, we're planning chaos in advance)",
                "Open to all college students (the more chaotic minds, the merrier!)",
                "Prizes for the most absurd, yet somehow functional creations",
                "Warning: Side effects may include uncontrollable laughter and questioning reality",
              ].map((detail, i) => (
                <div
                  key={i}
                  className="neo-brutal-card bg-white px-4 py-2 transform rotate-1"
                >
                  <p className="font-comic text-lg">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="neo-brutal-card p-8 bg-green-400 relative overflow-hidden">
            <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
            <h2 className="comic-text text-4xl mb-6 text-white">
              Why Would Anyone Do This? 🤔
            </h2>
            <div className="space-y-4">
              {[
                "Because normal hackathons are SO 2024",
                "To prove that your weirdest ideas deserve a spotlight",
                "Free pizza (okay, this one's not actually serious at all)",
                "Create something so bizarre it might just revolutionize... absolutely nothing",
              ].map((reason, i) => (
                <div
                  key={i}
                  className="neo-brutal-card bg-white px-4 py-2 transform -rotate-1"
                >
                  <p className="font-comic text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Organizers */}
        <div className="neo-brutal-card p-8 bg-yellow-400 mb-8 relative overflow-hidden">
          <div className="comic-dots absolute inset-0 opacity-20"></div>
          <h2 className="comic-text text-5xl mb-6 text-center text-white">
            The Masterminds Behind The Madness 🎪
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto font-comic">
            We're the Omdena Student Chapter, a bunch of supposedly serious tech
            enthusiasts who decided that the world needs more laughter than
            another todo list app. We've temporarily lost our minds and decided
            to organize this beautiful chaos. Join us in our mission to make
            technology fun again! (No refunds on sanity lost during the event)
          </p>
        </div>
      </section>
    </main>
  );
}
