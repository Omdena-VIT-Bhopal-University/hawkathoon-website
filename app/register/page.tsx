import NavBar from '../components/nav-bar';
import Link from 'next/link';

const registrationLinks = [
  {
    href: "https://forms.gle/SbnGYzpEFyGXrVVC7",
    label: "Registration Form",
    handle: "VIT Students",
  },
  {
    href: "https://forms.gle/jvTTsyrwFgxRahHm9",
    label: "Registration Form",
    handle: "External Students",
  },
  {
    href: "mailto:omdenachapter@vit.ac.in",
    label: "Email Us",
    handle: "omdenachapter@vit.ac.in",
  },
];

export default function Register() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <NavBar />
      
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="neo-brutal-border p-8 bg-[#00ffff] mb-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Register for Hawkathoon'25</h1>
          <p className="text-xl mb-4">
            Choose your registration path below and join us for an amazing hackathon experience!
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
          <h2 className="text-2xl font-bold mb-4">Important Information</h2>
          <div className="space-y-4">
            <div className="neo-brutal-border bg-white px-4 py-2">
              Registration Deadline: March 25th, 2025
            </div>
            <div className="neo-brutal-border bg-white px-4 py-2">
              Event Date: March 30th, 2025
            </div>
            <div className="neo-brutal-border bg-white px-4 py-2">
              Open to all college students
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 