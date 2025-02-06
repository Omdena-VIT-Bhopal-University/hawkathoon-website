import Link from "next/link";

const registrationLinks = [
  {
    href: "https://forms.gle/SbnGYzpEFyGXrVVC7",
    label: "Click if you're ready to embrace chaos",
    handle: "VITB Students 🔗",
  },
  {
    href: "https://forms.gle/jvTTsyrwFgxRahHm9",
    label: "Join the circus from afar",
    handle: "External Participants 🔗",
  },
  // {
  //   href: "mailto:omdenachapter@vit.ac.in",
  //   label: "Send us your confused screams",
  //   handle: "Email Us (If You Dare)",
  // },
];

export default function Register() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="neo-brutal-card p-8 bg-cyan-300 mb-8 text-center relative overflow-hidden">
          <div className="comic-crosshatch absolute inset-0 opacity-10 z-10"></div>
          <h1 className="comic-text text-5xl text-white mb-4">Register Now! 🎭</h1>
          <p className="text-sm font-comic">
            Kindly read{' '}
            <a
              href="https://www.youtube.com/watch?v=WLwldp2KzMI"
              target="_blank"
              className="text-pink-500 hover:text-pink-600 underline relative z-50"
            >
              terms and conditions
            </a>
            {' '}
            before registering.
          </p>
        </div>

        {/* Registration Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {registrationLinks.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              target="_blank"
              className="neo-brutal-card p-8 bg-pink-400 hover:bg-pink-500 transition-colors duration-300 text-center transform"
            >
              <h3 className="comic-text-2 text-5xl rotate-1">{link.handle}</h3>
              {/* <p className="text-lg font-comic">{link.label}</p> */}
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
              "A team can have a maximum of 4 members.",
              "Participants must create projects inspired by memes/current internet trends.",
              "Use of offensive or inappropriate content is strictly prohibited.",
              "Last day to participate: Feb 21st, 2025",
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

        {/* Important Dates */}
        {/* <div className="neo-brutal-card p-8 bg-green-400 mt-8 text-center relative overflow-hidden">
          <div className="comic-lines absolute inset-0 ropacity-20"></div>
          <h2 className="comic-text text-4xl mb-6 text-white">
            Important Dates
          </h2>
          <div className="space-y-4">
            {[
              "Registration Opens: Right now!",
              "Registration Closes: Soon",
              "Event Date: February 22nd, 2025",
            ].map((date, i) => (
              <div
                key={i}
                className="neo-brutal-card bg-white px-4 py-2 transform rotate-1"
              >
                <p className="font-comic text-lg">{date}</p>
              </div>
            ))}
          </div>
        </div> */}

      </section>
    </main>
  );
}
