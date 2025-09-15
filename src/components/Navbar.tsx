"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-indigo-600 tracking-tight"
        >
          MultiNotes
        </Link>

        {/* Login Button */}
        <div className="flex items-center gap-4">
          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 px-6">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
