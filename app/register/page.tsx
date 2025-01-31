import Link from "next/link";

const registrationLinks = [
  {
    href: "https://forms.gle/SbnGYzpEFyGXrVVC7",
    label: "Click if you're ready to embrace chaos",
    handle: "VIT Students (Local Lunatics)",
  },
  {
    href: "https://forms.gle/jvTTsyrwFgxRahHm9",
    label: "Join the circus from afar",
    handle: "External Students (Fellow Weirdos)",
  },
  {
    href: "mailto:omdenachapter@vit.ac.in",
    label: "Send us your confused screams",
    handle: "Email Us (If You Dare)",
  },
];

export default function Register() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="neo-brutal-card p-8 bg-cyan-300 mb-8 text-center relative overflow-hidden">
          <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
          <h1 className="comic-text text-5xl mb-6 text-white">
            Sign Your Sanity Away! 🎭
          </h1>
          <p className="text-xl mb-4 font-comic">
            Warning: By registering for Hawkathoon'25, you agree to temporarily
            abandon all logic and embrace the absurd. Side effects may include
            uncontrollable creativity and spontaneous innovation!
          </p>
        </div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {registrationLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              className="neo-brutal-card p-8 bg-pink-400 hover:bg-pink-500 transition-colors duration-300 text-center transform hover:rotate-1"
            >
              <h3 className="comic-text text-2xl mb-4">{link.handle}</h3>
              <p className="text-lg font-comic">{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="neo-brutal-card p-8 bg-green-400 mt-8 text-center relative overflow-hidden">
          <div className="comic-lines absolute inset-0 opacity-20"></div>
          <h2 className="comic-text text-4xl mb-6 text-white">
            ⚠️ Somewhat Important Information ⚠️
          </h2>
          <div className="space-y-4">
            {[
              "Last Day to Join the Madness: Feb 20th, 2025 (or when pigs fly, whichever comes first)",
              "D-Day: Feb 22nd, 2025 (mark your calendar with a crayon)",
              "Who Can Join: Any college student brave enough to question reality",
              "What to Bring: Your laptop, your weirdest ideas, and your sense of humor (required)",
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
      </section>
    </main>
  );
}
