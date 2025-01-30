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
              About Hawkathoon'25
            </h1>
            <p className="text-lg">
              A 24-hour hackathon where innovation meets impact. Join us in this exciting 
              journey of problem-solving, learning, and creating meaningful solutions.
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
            <h2 className="text-3xl font-bold mb-6">Event Details</h2>
            <div className="space-y-4">
              {[
                "24-hour hackathon starting March 30th, 2025",
                "Open to all college students",
                "Exciting prizes worth ₹50,000",
              ].map((detail, i) => (
                <div key={i} className="neo-brutal-border bg-white px-4 py-2">
                  {detail}
                </div>
              ))}
            </div>
          </div>

          <div className="neo-brutal-border p-8 bg-[#00ffff]">
            <h2 className="text-3xl font-bold mb-6">Why Participate?</h2>
            <div className="space-y-4">
              {[
                "Hands-on experience with cutting-edge technologies",
                "Network with industry experts and fellow developers",
                "Win exciting prizes and recognition",
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
            About Omdena Student Chapter
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
            The Omdena Student Chapter is dedicated to fostering innovation and 
            technical excellence among students. Through events like Hawkathoon, 
            we aim to create a platform for students to showcase their skills and 
            create meaningful solutions to real-world problems.
          </p>
        </div>
      </section>
    </main>
  );
} 