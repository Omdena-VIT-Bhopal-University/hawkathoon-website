import Link from "next/link";
import { Mail, Phone, User } from "lucide-react";

const contacts = [
  {
    name: "Arpit Sengar",
    role: "Chapter Lead",
    socials: [
      {
        icon: <Mail size={20} />,
        href: "mailto:arpitsengar2022@vitbhopal.ac.in",
        label: "Email",
        value: "arpitsengar2022@vitbhopal.ac.in",
      },
      {
        icon: <Phone size={20} />,
        href: "tel:+919311389851",
        label: "Phone",
        value: "+91 9311389851",
      },
    ],
  },
  {
    name: "Rohit Dwivedi",
    role: "Chapter Co-Lead",
    socials: [
      {
        icon: <Mail size={20} />,
        href: "mailto:rohitdwivedi2022@vitbhopal.ac.in",
        label: "Email",
        value: "rohitdwivedi2022@vitbhopal.ac.in",
      },
      {
        icon: <Phone size={20} />,
        href: "tel:+919406542241",
        label: "Phone",
        value: "+91 9406542241",
      },
    ],
  },
  {
    name: "Dr. Mayuri AVR",
    role: "Faculty Coordinator",
    socials: [
      {
        icon: <Mail size={20} />,
        href: "mailto:mayuri.avr@vitbhopal.ac.in",
        label: "Email",
        value: "mayuri.avr@vitbhopal.ac.in",
      },
    ],
  },
  {
    name: "Siddharth Nagaych",
    role: "Team Member",
    socials: [
      {
        icon: <User size={20} />,
        href: "#",
        label: "ID",
        value: "23MIM10081",
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:siddharth.23mim10081@vitbhopal.ac.in",
        label: "Email",
        value: "siddharth.23mim10081@vitbhopal.ac.in",
      },
      {
        icon: <Phone size={20} />,
        href: "tel:+917524864876",
        label: "Phone",
        value: "+91 7524864876",
      },
    ],
  },
  {
    name: "Alok Kumar Yadav",
    role: "Team Member",
    socials: [
      {
        icon: <User size={20} />,
        href: "#",
        label: "ID",
        value: "23BAI10611",
      },
      {
        icon: <Mail size={20} />,
        href: "mailto:alok.23bai10611@vitbhopal.ac.in",
        label: "Email",
        value: "alok.23bai10611@vitbhopal.ac.in",
      },
      {
        icon: <Phone size={20} />,
        href: "tel:+917011457328",
        label: "Phone",
        value: "+91 7011457328",
      },
    ],
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen pt-0 px-4 comic-dots bg-yellow-200">
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="neo-brutal-card p-8 bg-cyan-300 mb-8 text-center relative overflow-hidden">
          <div className="comic-crosshatch absolute inset-0 opacity-10"></div>
          <h1 className="comic-text text-5xl mb-6 text-white">Contact Us</h1>
          <p className="text-xl font-comic">
            Reach out to our team members for any queries (or just to say hi)!
          </p>
        </div>

        {/* Team Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, i) => (
            <div
              key={i}
              className="neo-brutal-card p-8 bg-pink-400 hover:bg-pink-500 transition-colors duration-300 transform hover:rotate-1"
            >
              <div className="mb-6">
                <h3 className="comic-text text-3xl mb-2">{contact.name}</h3>
                <p className="text-lg font-comic">{contact.role}</p>
              </div>
              <div className="space-y-4">
                {contact.socials.map((social, j) => (
                  <Link
                    key={j}
                    href={social.href}
                    target={
                      social.href.startsWith("mailto") ||
                      social.href.startsWith("tel")
                        ? "_self"
                        : "_blank"
                    }
                    className="neo-brutal-card bg-white px-4 py-2 flex items-center space-x-3 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
                  >
                    <span className="text-black">{social.icon}</span>
                    <span className="text-sm truncate font-comic">
                      {social.value}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Dates */}
        <div className="neo-brutal-card p-8 bg-green-400 mt-8 text-center relative overflow-hidden">
          <div className="comic-lines absolute inset-0 opacity-20"></div>
          <h2 className="comic-text text-4xl mb-6 text-white">
            Important Dates
          </h2>
          <div className="space-y-4">
            {[
              "Registration Opens: Right now!, 2025",
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
        </div>
      </section>
    </main>
  );
}
