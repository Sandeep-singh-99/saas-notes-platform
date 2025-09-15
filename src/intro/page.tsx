// "use client";

// import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export default function Intro() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-zinc-50 via-zinc-100 to-zinc-200">
//       {/* Navbar */}
//       <header className="w-full px-6 py-4 flex justify-between items-center border-b border-zinc-200 bg-white/80 backdrop-blur-md">
//         <h1 className="text-2xl font-bold text-zinc-800">Notes SaaS</h1>
//         <nav className="flex gap-4">
//           <Button variant="ghost" onClick={() => window.location.href = "/login"}>
//             Login
//           </Button>
//           <Button className="bg-zinc-900 text-white hover:bg-zinc-800">
//             Get Started
//           </Button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <main className="flex flex-1 flex-col items-center justify-center text-center px-6">
//         <div className="max-w-2xl space-y-6">
//           <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900">
//             Organize Your Notes with{" "}
//             <span className="text-zinc-700">Simplicity</span>
//           </h2>
//           <p className="text-lg text-zinc-600">
//             A modern multi-tenant SaaS app to securely manage your company’s notes.
//             Stay organized, collaborate, and upgrade as your needs grow.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
//             <Button
//               size="lg"
//               className="bg-zinc-900 text-white hover:bg-zinc-800 px-6"
//               onClick={() => window.location.href = "/login"}
//             >
//               Start Now <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="px-6"
//               onClick={() => alert('Explore Demo')}
//             >
//               Live Demo
//             </Button>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="w-full py-6 text-center text-sm text-zinc-500 border-t border-zinc-200">
//         © {new Date().getFullYear()} Notes SaaS. All rights reserved.
//       </footer>
//     </div>
//   );
// }





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
          onClick={() => window.location.href = "/login"}
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
