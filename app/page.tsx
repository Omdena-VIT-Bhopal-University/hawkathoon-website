import NavBar from './components/nav-bar';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen pt-20 px-4">
      <NavBar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-8">
        <div className="neo-brutal-border p-8 bg-[#00ffff] mb-8 text-center">
          <div className="mb-8">
            <Image
              src="/assets/images/logo.png"
              alt="Hawkathon Logo"
              width={600}
              height={200}
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
            Join us for an exciting hackathon experience where innovation meets impact
          </p>
          <Link href="/register" className="neo-brutal-button inline-block text-xl">
            Register Now
          </Link>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {[
            { title: "24 HRS", desc: "Non-stop hacking" },
            { title: "₹50,000", desc: "In prizes" },
            { title: "MAR 30", desc: "2025" },
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
          <h2 className="text-4xl font-bold mb-6">WHY PARTICIPATE?</h2>
          <div className="space-y-4">
            {[
              "Hands-on experience with cutting-edge technologies",
              "Network with industry experts and fellow developers",
              "Win exciting prizes and recognition",
            ].map((item, i) => (
              <div key={i} className="neo-brutal-border bg-white px-4 py-2">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="neo-brutal-border p-8 bg-white text-center mb-8">
          <h2 className="text-4xl font-bold mb-6">READY TO HACK?</h2>
          <div className="space-x-4">
            <Link href="/register" className="neo-brutal-button inline-block text-xl">
              Register Now
            </Link>
            <Link href="/about" className="neo-brutal-button inline-block text-xl bg-white">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
