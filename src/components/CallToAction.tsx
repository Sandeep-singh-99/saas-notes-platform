"use client";

import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Ready to simplify your notes management?
        </h2>
        <p className="mt-4 text-lg">
          Join Acme and Globex in managing notes securely with MultiNotes.
        </p>
        <Button
          size="lg"
          className="mt-8 bg-white text-indigo-600 hover:bg-zinc-100 px-8"
          onClick={() => window.location.href = "/login"}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
}
