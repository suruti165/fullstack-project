"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Link from "next/link";
import { ArrowLeft, Trash2, CheckCircle, Users, Clock, FileText } from "lucide-react";

type Volunteer = {
  id: number;
  name: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
  message: string;
  status: string;
  created_at: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVolunteers = async () => {
    setLoading(true);

    const { data, error } = await supabase
      .from("volunteers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
    } else {
      setVolunteers(data || []);
    }

    setLoading(false);
  };

  const updateStatus = async (id: number, status: string) => {
    const { error } = await supabase
      .from("volunteers")
      .update({ status })
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      fetchVolunteers();
    }
  };

  const deleteVolunteer = async (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this volunteer?");

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("volunteers")
      .delete()
      .eq("id", id);

    if (error) {
      alert(error.message);
    } else {
      fetchVolunteers();
    }
  };
  
  useEffect(() => {
      const isAdmin = localStorage.getItem("admin-auth");

      if (isAdmin !== "true") {
        router.push("/login");
        return;
     }

     fetchVolunteers();
    }, [router]);

  const total = volunteers.length;
  const pending = volunteers.filter((v) => v.status === "Pending").length;
  const approved = volunteers.filter((v) => v.status === "Approved").length;

  return (
    <main className="min-h-screen bg-[#050816] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="mb-8 inline-flex items-center gap-2 text-cyan-300">
          <ArrowLeft size={18} /> Back to Home
        </Link>

        <div className="mb-10">
          <h1 className="text-4xl font-black">Admin Dashboard</h1>
          <p className="mt-3 text-slate-400">
            Manage volunteer registrations and view simple reports.
          </p>
        </div>

        <div className="mb-10 grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Users className="mb-4 text-cyan-300" />
            <p className="text-slate-400">Total Volunteers</p>
            <h2 className="mt-2 text-4xl font-black">{total}</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <Clock className="mb-4 text-yellow-300" />
            <p className="text-slate-400">Pending</p>
            <h2 className="mt-2 text-4xl font-black">{pending}</h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <CheckCircle className="mb-4 text-green-300" />
            <p className="text-slate-400">Approved</p>
            <h2 className="mt-2 text-4xl font-black">{approved}</h2>
          </div>
        </div>

        <div className="mb-8 rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-violet-500/10 p-6">
          <div className="flex items-center gap-3">
            <FileText className="text-cyan-300" />
            <h2 className="text-2xl font-bold">Report Summary</h2>
          </div>

          <p className="mt-4 text-slate-300">
            Total {total} volunteers registered. {approved} approved and {pending} pending.
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5">
          {loading ? (
            <p className="p-8 text-center text-slate-400">Loading volunteers...</p>
          ) : volunteers.length === 0 ? (
            <p className="p-8 text-center text-slate-400">No volunteers found.</p>
          ) : (
            <table className="w-full min-w-[1000px] text-left text-sm">
              <thead className="bg-white/10 text-slate-300">
                <tr>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Interest</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {volunteers.map((volunteer) => (
                  <tr key={volunteer.id} className="border-t border-white/10">
                    <td className="p-4 font-semibold">{volunteer.name}</td>
                    <td className="p-4 text-slate-300">{volunteer.email}</td>
                    <td className="p-4 text-slate-300">{volunteer.phone}</td>
                    <td className="p-4 text-slate-300">{volunteer.city}</td>
                    <td className="p-4 text-slate-300">{volunteer.interest}</td>
                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${
                          volunteer.status === "Approved"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-yellow-500/20 text-yellow-300"
                        }`}
                      >
                        {volunteer.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className="flex gap-3">
                        <button
                          onClick={() => updateStatus(volunteer.id, "Approved")}
                          className="rounded-full bg-green-500/20 px-4 py-2 text-green-300 hover:bg-green-500/30"
                        >
                          Approve
                        </button>

                        <button
                          onClick={() => updateStatus(volunteer.id, "Pending")}
                          className="rounded-full bg-yellow-500/20 px-4 py-2 text-yellow-300 hover:bg-yellow-500/30"
                        >
                          Pending
                        </button>

                        <button
                          onClick={() => deleteVolunteer(volunteer.id)}
                          className="rounded-full bg-red-500/20 px-4 py-2 text-red-300 hover:bg-red-500/30"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}