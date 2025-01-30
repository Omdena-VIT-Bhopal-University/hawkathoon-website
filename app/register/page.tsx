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
    <main className="min-h-screen pt-0 px-4">
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="neo-brutal-border p-8 bg-[#00ffff] mb-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Sign Your Sanity Away! 🎭</h1>
          <p className="text-xl mb-4">
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
              className="neo-brutal-border neo-brutal-shadow p-8 bg-[#FFD700] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all text-center"
            >
              <h3 className="text-2xl font-bold mb-4">{link.handle}</h3>
              <p className="text-lg">{link.label}</p>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="neo-brutal-border p-8 bg-[#ff00ff] mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            ⚠️ Somewhat Important Information ⚠️
          </h2>
          <div className="space-y-4">
            <div className="neo-brutal-border bg-white px-4 py-2">
              Last Day to Join the Madness: Feb 20th, 2025 (or when pigs fly,
              whichever comes first)
            </div>
            <div className="neo-brutal-border bg-white px-4 py-2">
              D-Day: Feb 22nd, 2025 (mark your calendar with a crayon)
            </div>
            <div className="neo-brutal-border bg-white px-4 py-2">
              Who Can Join: Any college student brave enough to question reality
            </div>
            <div className="neo-brutal-border bg-white px-4 py-2">
              What to Bring: Your laptop, your weirdest ideas, and your sense of
              humor (required)
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
