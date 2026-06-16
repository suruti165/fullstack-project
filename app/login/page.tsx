"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "admin@nayepankh.com" && password === "admin123") {
      localStorage.setItem("admin-auth", "true");
      router.push("/admin");
    } else {
      alert("Invalid admin credentials");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur">
        <h1 className="text-center text-4xl font-black">Admin Login</h1>
        <p className="mt-3 text-center text-slate-400">
          Login to access NayePankh admin dashboard.
        </p>

        <form onSubmit={handleLogin} className="mt-8 space-y-5">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
            <Mail className="text-cyan-300" size={20} />
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:text-slate-500"
              required
            />
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
            <Lock className="text-cyan-300" size={20} />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent outline-none placeholder:text-slate-500"
              required
            />
          </div>

          <button className="w-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 font-bold text-white shadow-lg">
            Login
          </button>
        </form>

        <p className="mt-6 rounded-2xl bg-white/5 p-4 text-sm text-slate-400">
          Demo Login: admin@nayepankh.com / admin123
        </p>
      </div>
    </main>
  );
}