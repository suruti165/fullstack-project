"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Globe2,
  HandHeart,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Quote,
  Sun,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const stats = [
  { number: "500+", label: "Active Volunteers" },
  { number: "1000+", label: "Lives Impacted" },
  { number: "50+", label: "Campaigns Completed" },
  { number: "20+", label: "Cities Reached" },
];

const causes = [
  {
    icon: BookOpen,
    image: "/education.png",
    title: "Education Support",
    desc: "Help children with learning resources, mentoring and digital awareness.",
  },
  {
    icon: HandHeart,
    image: "/donate.png",
    title: "Donation Drives",
    desc: "Support families through food, clothes, essentials and community help.",
  },
  {
    icon: Users,
    image: "/volunteer.jpg",
    title: "Volunteer Network",
    desc: "Join events, awareness campaigns and social impact activities.",
  },
];

const journey = [
  "Register as Volunteer",
  "Attend Orientation",
  "Join Campaigns",
  "Earn Certificate",
];

const testimonials = [
  {
    name: "Volunteer Member",
    text: "Working with NayePankh helped me understand how small efforts can create real change.",
  },
  {
    name: "Student Volunteer",
    text: "The volunteering journey gave me confidence, teamwork experience and purpose.",
  },
  {
    name: "Community Supporter",
    text: "A platform where youth can contribute their skills for society in a meaningful way.",
  },
];

const faqs = [
  {
    q: "How can I join as a volunteer?",
    a: "You can join by filling the volunteer form and selecting the cause you want to support.",
  },
  {
    q: "Can students participate?",
    a: "Yes, students can contribute through campaigns, teaching, content creation and donation drives.",
  },
  {
    q: "What is unique in this redesign?",
    a: "This page includes a modern dark UI, cause selection, volunteer journey, impact dashboard, FAQ and strong CTA sections.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeSection, setActiveSection] = useState("home");

  const [theme, setTheme] = useState("dark");

  const mutedText = theme === "light" ? "text-slate-700" : "text-slate-400";
  const softText = theme === "light" ? "text-slate-600" : "text-slate-400";
  const cardClass =
      theme === "light"
         ? "border-slate-200 bg-white text-slate-900 shadow-lg"
         : "border-white/10 bg-white/5 text-white";

  const changeSection = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "impact", label: "Impact" },
    { id: "work", label: "Work" },
    { id: "journey", label: "Journey" },
    { id: "gallery", label: "Gallery" },
    { id: "why", label: "Why Us" },
    { id: "faq", label: "FAQ" },
    { id: "contact", label: "Contact" },
  ];

  return (
      <main
          className={`min-h-screen overflow-hidden transition ${
            theme === "light"
             ? "bg-gradient-to-br from-slate-50 to-cyan-50 text-slate-900"
             : "bg-[#050816] text-white"
         }`}
      >  
      
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500/20 blur-[130px]" />
        <div className="absolute right-[-10%] top-[15%] h-96 w-96 rounded-full bg-violet-500/20 blur-[130px]" />
        <div className="absolute bottom-[-10%] left-[30%] h-96 w-96 rounded-full bg-blue-500/20 blur-[130px]" />
      </div>

      <nav
        className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl transition ${
        theme === "light"
          ? "border-slate-200 bg-white/90 shadow-sm"
          : "border-white/10 bg-[#050816]/75"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => changeSection("home")} className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NayePankh Logo"
              width={150}
              height={50}
              priority
              className="h-12 w-auto rounded-lg bg-white p-1 object-contain"
            />
          </button>

          <div
            className={`hidden items-center gap-5 text-sm font-medium md:flex ${
              theme === "light" ? "text-slate-700" : "text-slate-300"
            }`}
          >
             {navItems.map((item) => (
                <button
                   key={item.id}
                   onClick={() => changeSection(item.id)}
                   className={`hover:text-cyan-300 ${
                      activeSection === item.id ? "text-cyan-300" : ""
                 }`}
          >
                 {item.label}
               </button>
           ))}
           
           <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/15"
          >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

           <button
                onClick={() => changeSection("donate")}
                className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-5 py-2 font-semibold text-white shadow-lg transition hover:scale-105"
           >
            Donate
           </button>
         </div>

          <div className="flex items-center gap-3 md:hidden">
             <button
                onClick={() => changeSection("donate")}
                className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-105"
             >
                Donate
             </button>

             <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`rounded-full border px-3 py-2 text-sm font-semibold transition ${
                   theme === "light"
                       ? "border-slate-300 bg-slate-100 text-slate-800"
                       : "border-white/15 bg-white/10 text-white"
               }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

             <button
                 onClick={() => setMenuOpen(!menuOpen)}
                 className="rounded-full border border-white/15 p-2"
             >
                 {menuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
            </div>
        </div>

        {menuOpen && (
          <div
           className={`border-t px-6 py-5 md:hidden ${
            theme === "light"
              ? "border-slate-200 bg-white text-slate-700"
              : "border-white/10 bg-[#050816] text-slate-300"
           }`}
        >
            <div className="flex flex-col gap-4 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => changeSection(item.id)}
                  className="text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <div className="relative z-10 min-h-screen px-6 pb-20 pt-32 md:pt-40">
        {activeSection === "home" && (
          <section>
            <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  <Sparkles size={16} />
                  Small Hands, Big Change
                </div>

                <h2 className="text-5xl font-black leading-tight md:text-7xl">
                  Empowering
                  <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                    Hope & Humanity
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  A creative and modern webpage for NayePankh Foundation designed
                  to inspire volunteers, supporters and young changemakers.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/register">
                     <button className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-3 font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:scale-105">
                          Become a Volunteer <ArrowRight size={18} />
                     </button>
                  </Link>
                  
                   
                  <Link href="/login">
                      <button className="rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-7 py-3 font-bold text-white shadow-lg shadow-violet-500/25 transition hover:scale-105">
                        Admin
                      </button>
                  </Link>

                  <button
                    onClick={() => changeSection("work")}
                    className="rounded-full border border-white/15 bg-white/10 px-7 py-3 font-bold backdrop-blur transition hover:bg-white/15"
                  >
                    Explore Causes
                  </button>
                </div>
              </motion.div>

              <motion.div
                 initial={{ opacity: 0, scale: 0.92 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className={`relative rounded-[3rem] border p-6 shadow-2xl transition ${
                    theme === "light"
                       ? "border-slate-200 bg-white text-slate-900"
                       : "border-white/10 bg-white/5 text-white"
                }`}
             >
                <div
                  className={`rounded-[1.5rem] border p-6 ${
                    theme === "light"
                     ? "border-slate-200 bg-white text-slate-900"
                     : "border-white/10 bg-white/5 text-white"
                 }`}
               >
                  <div
                     className={`rounded-[1.5rem] border p-6 ${
                         theme === "light"
                           ? "border-slate-200 bg-slate-100 text-slate-900"
                           : "border-white/10 bg-[#0B1120]/95 text-white"
                    }`}
                  >
                    <Image
                      src="/hero.png"                      
                      alt="NayePankh Foundation work"
                      width={700}
                      height={420}
                      priority
                      className="mb-6 h-64 w-full rounded-[1.5rem] object-cover"
                    />

                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-400">Live Impact</p>
                        <h3 className="text-2xl font-bold">Community Dashboard</h3>
                      </div>
                      <ShieldCheck className="text-cyan-300" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {stats.map((stat) => (
                        <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                          <h4 className="text-3xl font-black text-cyan-300">{stat.number}</h4>
                          <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {activeSection === "about" && (
          <section className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                About Us
              </p>
              <h2 className="text-4xl font-black md:text-5xl">
                Building a better digital face for a social cause.
              </h2>
            </div>

            <p className="text-lg leading-8 text-slate-300">
              This redesigned webpage improves the online presence of NayePankh
              Foundation with a clean dark layout, better readability, strong call
              to action buttons and a modern volunteer-focused experience.
            </p>
          </section>
        )}

        {activeSection === "impact" && (
          <section className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Impact
              </p>
              <h2 className="text-4xl font-black md:text-5xl">Our Social Reach</h2>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {stats.map((stat) => (
                <motion.div
                  whileHover={{ y: -6 }}
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur"
                >
                  <h3 className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-4xl font-black text-transparent">
                    {stat.number}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "work" && (
          <section className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Choose Your Cause
              </p>
              <h2 className="text-4xl font-black md:text-5xl">
                How do you want to help?
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {causes.map((cause) => {
                const Icon = cause.icon;
                return (
                  <motion.div
                    whileHover={{ y: -10 }}
                    key={cause.title}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-cyan-400/40"
                  >
                    <Image
                      src={cause.image}
                      alt={cause.title}
                      width={500}
                      height={300}
                      className="mb-6 h-48 w-full rounded-2xl object-cover"
                    />

                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-2xl font-bold">{cause.title}</h3>
                    <p className="mt-4 leading-7 text-slate-400">{cause.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}

        {activeSection === "journey" && (
          <section className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Volunteer Journey
              </p>
              <h2 className="text-4xl font-black md:text-5xl">
                From interest to impact
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {journey.map((step, index) => (
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  key={step}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold">{step}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    A simple step that makes volunteering more organized and meaningful.
                  </p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "gallery" && (
          <section className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Gallery
              </p>
              <h2 className="text-4xl font-black md:text-5xl">Moments of Change</h2>
              <p className="mt-4 text-slate-400">Small actions creating meaningful impact.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {["/hero.png", "/education.png", "/volunteer.jpg"].map((img, index) => (
                <Image
                  key={img}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  width={500}
                  height={400}
                  className="h-80 w-full rounded-[2rem] object-cover transition duration-300 hover:scale-[1.02]"
                />
              ))}
            </div>
          </section>
        )}

        {activeSection === "why" && (
          <section className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                Why Choose Us
              </p>

              <h2 className="text-4xl font-black md:text-5xl">
                Why Join NayePankh?
              </h2>

              <p className="mt-4 text-slate-400">
                A place where passion turns into meaningful impact.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["🌍", "Real Community Impact", "Work directly on campaigns that help people through education, awareness and community support."],
                ["🎓", "Student Opportunities", "Students can gain practical exposure, teamwork experience and volunteer certificates."],
                ["🚀", "Skill Development", "Improve leadership, communication, teamwork and real-world problem solving skills."],
              ].map(([emoji, title, text]) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -8 }}
                  className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-cyan-400/40"
                >
                  <div className="mb-5 text-5xl">{emoji}</div>
                  <h3 className="text-2xl font-bold">{title}</h3>
                  <p className="mt-4 leading-7 text-slate-400">{text}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "faq" && (
          <section className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">
                FAQ
              </p>
              <h2 className="text-4xl font-black">Quick Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between text-left font-bold"
                  >
                    {faq.q}
                    <ChevronDown className={`transition ${openFaq === index ? "rotate-180" : ""}`} />
                  </button>

                  {openFaq === index && <p className="mt-4 text-slate-400">{faq.a}</p>}
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "donate" && (
          <section className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
               <h2 className="text-4xl font-black md:text-5xl">
                  Support a Better Tomorrow
               </h2>

               <p className="mx-auto mt-4 max-w-2xl text-slate-400">
                  Your contribution helps education, food distribution,
                  healthcare awareness and youth empowerment programs.
               </p>
             </div>
 
             <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                  <h3 className="mb-6 text-2xl font-bold text-cyan-300">
                     Donation Impact
                  </h3>

                  <div className="space-y-4">
                    <div className="rounded-2xl bg-white/5 p-5">
                      <h4 className="font-bold text-xl">₹500</h4>
                      <p className="text-slate-400">
                        Supports educational materials for children.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-5">
                      <h4 className="font-bold text-xl">₹1000</h4>
                      <p className="text-slate-400">
                        Helps provide food and essential supplies.
                      </p>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-5">
                      <h4 className="font-bold text-xl">₹2500+</h4>
                      <p className="text-slate-400">
                         Supports community development programs.
                      </p>
                    </div>
                   </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <h3 className="mb-6 text-2xl font-bold text-cyan-300">
                       Donate Now
                    </h3>

                  <div className="rounded-2xl bg-white p-5 text-center text-black">
                    <p className="font-semibold">
                       Add NGO UPI QR Image Here
                    </p>

                    <div className="mt-4 flex h-56 items-center justify-center rounded-xl border-2 border-dashed border-slate-300">
                       QR CODE
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/5 p-5">
                    <p className="text-slate-300">
                       UPI ID: <span className="font-bold text-cyan-300">nayepankh@upi</span>
                    </p>

                    <p className="mt-2 text-slate-400">
                       Every contribution makes a meaningful difference ❤️
                    </p>
                  </div>
                </div>
               </div>
             </section>
            )}

        {activeSection === "contact" && (
          <section className="mx-auto max-w-7xl">
            <div className="mb-12 text-center">
              <Globe2 className="mx-auto mb-6 text-cyan-300" size={42} />
              <h2 className="text-4xl font-black md:text-5xl">Be a Changemaker</h2>
              <p className={`mx-auto mt-5 max-w-2xl ${mutedText}`}>
                Join hands with NayePankh Foundation and contribute your time,
                ideas and skills to create positive change.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className={`rounded-3xl border p-6 ${cardClass}`}>
                <Mail className="mb-4 text-cyan-300" />
                <h3 className="font-bold">Email</h3>
                <p className="mt-2 text-slate-400">contact@nayepankh.org</p>
              </div>

              <div className={`rounded-3xl border p-6 ${cardClass}`}>
                <Phone className="mb-4 text-cyan-300" />
                <h3 className="font-bold">Phone</h3>
                <p className={`mt-2 ${softText}`}>+91 XXXXX XXXXX</p>
              </div>

              <div className={`rounded-3xl border p-6 ${cardClass}`}>
                <MapPin className="mb-4 text-cyan-300" />
                <h3 className="font-bold">Location</h3>
                <p className={`mt-2 ${softText}`}>India</p>
              </div>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {testimonials.map((item) => (
                <div key={item.name} className={`rounded-[1.5rem] border p-6 ${cardClass}`}>
                  <Quote className="mb-4 text-cyan-300" />
                  <p className={`leading-7 ${mutedText}`}>{item.text}</p>
                  <h4 className="mt-5 font-bold">{item.name}</h4>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <footer
         className={`relative z-10 border-t px-6 py-14 transition ${
            theme === "light"
               ? "border-slate-200 bg-slate-100 text-slate-800"
               : "border-white/10 bg-[#030712] text-white"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Logo"
                width={140}
                height={50}
                className="h-12 w-auto rounded-lg bg-white p-1 object-contain"
              />
            </div>

            <p className={`leading-7 ${
                 theme === "light" ? "text-slate-700" : "text-slate-400"
              }`}>
              Empowering communities through education, volunteering and social impact initiatives.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-cyan-300">Quick Links</h3>

            <div className={`flex flex-col items-start gap-3 ${
                   theme === "light" ? "text-slate-700" : "text-slate-400"
                 }`}>
              <button onClick={() => changeSection("home")}>Home</button>
              <button onClick={() => changeSection("about")}>About</button>
              <button onClick={() => changeSection("work")}>Work</button>
              <button onClick={() => changeSection("contact")}>Contact</button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-cyan-300">Contact Info</h3>

            <div className={`space-y-3 ${
                   theme === "light" ? "text-slate-700" : "text-slate-400"
                 }`}>
              <p>📧 contact@nayepankh.org</p>
              <p>📍 India</p>
              <p>📞 +91 XXXXX XXXXX</p>
            </div>
          </div>
        </div>

        <div className={`mt-10 border-t pt-6 text-center text-sm ${
               theme === "light"
                  ? "border-slate-200 text-slate-600"
                  : "border-white/10 text-slate-500"
              }`}>
          © 2026 NayePankh Foundation | Designed by Shruti
        </div>
      </footer>
    </main>
  );
}