"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center h-screen justify-center text-center px-6 py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-zinc-50" />

      {/* Decorative radial glow */}
      <div className="absolute -z-10 top-1/4 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-400/30 to-purple-400/0 rounded-full blur-3xl opacity-60" />

      {/* Hero Content */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-zinc-900 max-w-3xl">
        Simplify Your{" "}
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Notes Management
        </span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-zinc-700 max-w-2xl">
        A modern multi-tenant SaaS application to securely manage your company’s
        notes. Stay organized, collaborate effortlessly, and scale as you grow.
      </p>

      {/* Call to Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:from-indigo-700 hover:to-purple-700 px-8"
          onClick={() => (window.location.href = "/login")}
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="px-8 border-zinc-300 hover:border-indigo-600 hover:text-indigo-600"
          onClick={() => alert("Explore Demo coming soon!")}
        >
          Live Demo
        </Button>
      </div>
    </section>
  );
}
