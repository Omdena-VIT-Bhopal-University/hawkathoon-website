import Link from "next/link";
import Image from "next/image";


export default function About() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8 ">
          <div className="neo-brutal-card p-8 bg-cyan-300 relative overflow-hidden ">
            <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
            <h1 className="comic-text text-5xl mb-6 text-white">
              What's This Madness About? 🎭
            </h1>
            <div className="my-4">
              <p className="text-lg font-comic">
                Hawkathoon'25 is a unique event that blends creativity
                and humor that will encourage participants to create absurd yet
                entertaining projects inspired by current memes and internet trends.
                <br />
                Participants will showcase their projects which will be
                judged based on their level of absurdity, creativity and entertainment
                value.
              </p>
            </div>
            <hr />
            <div className="my-4">
              <h2 className="my-2 text-xl font-comic">Objective</h2>
              <ul className="list-disc pl-6 text-lg font-comic">
                <li>Develop and showcase your idea in front of the judges.</li>
                <li>Showcase absurd yet entertaining projects inspired by memes.</li>
              </ul>
            </div>
            <div className="my-4">
              <h2 className="my-2 text-xl font-comic">Resources & Materials 📦</h2>
              <ul className="list-disc pl-6 text-lg font-comic">
                <li>Participants are encouraged to bring their own laptops and materials.</li>
                <li>Basic stationery and internet access will be provided.</li>
              </ul>
            </div>
            <div className="my-4">
              <h2 className="text-xl font-comic">Awards & Prizes 🎖️</h2>
              <ul className="list-disc pl-6 text-lg font-comic">
                <li><strong>Top 3 Performers:</strong> Certificate of Appreciation and Selection for Omdena’s 5th international project.</li>
                <li><strong>Participants:</strong> Certificate of Participation for all the teams.</li>
              </ul>
            </div>

          </div>
          <div className="neo-brutal-card p-4 bg-pink-400 transform ">
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
          <div className="neo-brutal-card p-8 bg-purple-400 relative overflow-hidden ">
            <div className="comic-lines absolute inset-0 opacity-20"></div>
            <h2 className="comic-text text-4xl mb-6 text-white">
              The Not-So-Fine Print 📜
            </h2>
            <div className="space-y-4">
              {[
                "1.5 hours of pure chaos on Feb 22, 2025",
                "Open to all college students",
                "Certificates for all the teams",
              ].map((detail, i) => (
                <div
                  key={i}
                  className="neo-brutal-card bg-white px-4 py-2 transform"
                >
                  <p className="font-comic text-lg">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="neo-brutal-card p-8 bg-green-400 relative overflow-hidden ">
            <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
            <h2 className="comic-text text-4xl mb-6 text-white">
              Judging Criteria 🏆
            </h2>
            <div className="space-y-4">
              {[
                "Level of Absurdity: How absurd and meme-worthy the idea is.",
                "Creativity: Originality and uniqueness of the project.",
                "Entertainment Value: How amusing and engaging the project is."
              ].map((reason, i) => (
                <div
                  key={i}
                  className="neo-brutal-card bg-white px-4 py-2 transform"
                >
                  <p className="font-comic text-lg">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Organizers */}
        <div className="neo-brutal-card p-8 bg-yellow-400 mb-8 relative overflow-hidden ">
          <div className="comic-dots absolute inset-0 opacity-20"></div>
          <h2 className="comic-text text-5xl mb-6 text-center text-white">
            The Masterminds Behind The Madness 🎪
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto font-comic">
            The VIT Bhopal Chapter is an initiative of Omdena, a global community that connects data scientists,
            engineers and other experts to work on projects that drive social impact.
            The Local Chapter is a platform where individuals can collaborate, share ideas,
            and work on projects that make a real difference in their local community.
          </p>
          <div className="flex justify-center items-center h-full">
            <Link
              href="https://www.omdena.com/local-chapters/vit-bhopal-university"
              target="_blank"
              className="neo-brutal-button inline-block text-sm bg-white transform px-14 mt-8 hover:scale-105"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}