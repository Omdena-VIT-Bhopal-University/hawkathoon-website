import Image from "next/image";
import Link from "next/link";

const data = [
  {
    title: "Schizophrenia Detector",
    desc: "A simple app to detect Schizophrenia",
    link: "https://github.com/arpy8/Are_you_Schizophrenic",
    image: "/assets/images/fight-club.jpg",
  },
  {
    title: "BSOD",
    desc: "A python package to simulate BSOD",
    link: "https://github.com/arpy8/bsod",
    image: "/assets/images/bsod.png",
  },
  {
    title: "Bhandaro ki Soochna",
    desc: "Mobile app to assist users in locating nearest bhandara.",
    link: "",
    image: "/assets/images/fight-club.jpg",
  },
];

function ProjectCard({ title, desc, link, image }) {
  return (
    <div className="neo-brutal-card p-4 bg-white hover:bg-yellow-100 transition-colors duration-300 transform rotate-1 hover:rotate-0">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width={300}
        height={200}
        className="w-full h-48 object-cover mb-4 neo-brutal-border"
      />
      <h3 className="comic-text text-2xl mb-2">{title}</h3>
      <p className="font-comic text-lg mb-4">{desc}</p>
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="neo-brutal-button inline-block bg-cyan-300 hover:bg-cyan-400 transition-colors duration-300"
        >
          View Project
        </Link>
      )}
    </div>
  );
}

export default function ExamplePage() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
      <section className="max-w-7xl mx-auto mt-8">
        <div className="neo-brutal-card p-8 bg-pink-400 mb-8 text-center relative overflow-hidden">
          <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
          <h1 className="comic-text text-5xl mb-6 text-white">
            Example Projects
          </h1>
          <p className="text-xl font-comic">
            Check out these mind-bending creations from past Hawkathoons!
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}
