import Link from "next/link";
import { Mail, Phone, User, GraduationCap } from "lucide-react";

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
      {
        icon: <GraduationCap size={20} />,
        href: "#",
        label: "Role",
        value: "Faculty Coordinator",
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
    <main className="min-h-screen pt-0 px-4">
      <section className="max-w-7xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="neo-brutal-border p-8 bg-[#00ffff] mb-8 text-center">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl">
            Reach out to our team members for any queries.
          </p>
        </div>

        {/* Team Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {contacts.map((contact, i) => (
            <div
              key={i}
              className="neo-brutal-border neo-brutal-shadow p-8 bg-[#FFD700] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{contact.name}</h3>
                <p className="text-lg">{contact.role}</p>
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
                    className="neo-brutal-border bg-white px-4 py-2 flex items-center space-x-3 hover:translate-x-[2px] hover:translate-y-[2px] transition-transform"
                  >
                    <span className="text-black">{social.icon}</span>
                    <span className="text-sm truncate">{social.value}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Dates */}
        <div className="neo-brutal-border p-8 bg-[#ff00ff] mt-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Important Dates</h2>
          <div className="space-y-4">
            <div className="neo-brutal-border bg-white px-4 py-2">
              Registration Opens: March 1st, 2025
            </div>
            <div className="neo-brutal-border bg-white px-4 py-2">
              Registration Closes: March 25th, 2025
            </div>
            <div className="neo-brutal-border bg-white px-4 py-2">
              Event Date: March 30th, 2025
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
