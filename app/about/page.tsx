import NavBar from '../components/nav-bar';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <NavBar />
      
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          <div className="neo-brutal-border p-8 bg-[#00ffff]">
            <h1 className="text-4xl font-bold mb-6">
              What's This Madness About? 🎭
            </h1>
            <p className="text-lg">
              Welcome to Hawkathoon'25, where we've thrown sanity out the window! 
              This isn't your typical boring hackathon - it's a 24-hour festival of 
              absurdity where we celebrate the most ridiculous, outrageous, and 
              entertainingly useless solutions to problems that probably don't exist! 
            </p>
          </div>
          <div className="neo-brutal-border p-4 bg-[#FFD700]">
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
          <div className="neo-brutal-border p-8 bg-[#ff00ff]">
            <h2 className="text-3xl font-bold mb-6">The Not-So-Fine Print 📜</h2>
            <div className="space-y-4">
              {[
                "24 hours of pure chaos starting Feb 22, 2025 (yes, we're planning chaos in advance)",
                "Open to all college students (the more chaotic minds, the merrier!)",
                "Prizes for the most absurd, yet somehow functional creations",
                "Warning: Side effects may include uncontrollable laughter and questioning reality",
              ].map((detail, i) => (
                <div key={i} className="neo-brutal-border bg-white px-4 py-2">
                  {detail}
                </div>
              ))}
            </div>
          </div>

          <div className="neo-brutal-border p-8 bg-[#00ffff]">
            <h2 className="text-3xl font-bold mb-6">Why Would Anyone Do This? 🤔</h2>
            <div className="space-y-4">
              {[
                "Because normal hackathons are SO 2024",
                "To prove that your weirdest ideas deserve a spotlight",
                "Free pizza (okay, this one's actually serious)",
                "Create something so bizarre it might just revolutionize... absolutely nothing",
              ].map((reason, i) => (
                <div key={i} className="neo-brutal-border bg-white px-4 py-2">
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Organizers */}
        <div className="neo-brutal-border p-8 bg-white mb-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            The Masterminds Behind The Madness 🎪
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            We're the Omdena Student Chapter, a bunch of supposedly serious tech enthusiasts who 
            decided that the world needs more laughter than another todo list app. We've temporarily 
            lost our minds and decided to organize this beautiful chaos. Join us in our mission to 
            make technology fun again! (No refunds on sanity lost during the event)
          </p>
        </div>
      </section>
    </main>
  );
} 