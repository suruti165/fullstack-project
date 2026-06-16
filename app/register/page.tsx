"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const { error } = await supabase.from("volunteers").insert([form]);

    if (error) {
      alert(error.message);
    } else {
      setSuccess("Volunteer registration submitted successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        interest: "",
        message: "",
      });
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-cyan-300">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
          <h1 className="text-4xl font-black">Volunteer Registration</h1>
          <p className="mt-3 text-slate-400">
            Join NayePankh Foundation and contribute your time, skills and ideas.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-500"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email Address"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-500"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-500"
            />

            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-500"
            />

            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 outline-none"
            >
              <option value="">Select Interest</option>
              <option value="Education Support">Education Support</option>
              <option value="Donation Drive">Donation Drive</option>
              <option value="Awareness Campaign">Awareness Campaign</option>
              <option value="Social Media Volunteer">Social Media Volunteer</option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Why do you want to join?"
              rows={5}
              className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 outline-none placeholder:text-slate-500"
            />

            <button
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-7 py-4 font-bold text-white shadow-lg transition hover:scale-[1.01]"
            >
              {loading ? "Submitting..." : "Submit Registration"} <Send size={18} />
            </button>

            {success && (
              <p className="rounded-2xl bg-green-500/15 p-4 text-center text-green-300">
                {success}
              </p>
            )}
          </form>
        </div>
      </div>
    </main>
  );
}