import { Button } from "@/components/ui/button";

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-t from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Simple Pricing
        </h2>
        <p className="mt-4 text-lg text-zinc-600">
          Start free, upgrade anytime for unlimited note storage.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Free Plan */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-bold text-zinc-900">Free Plan</h3>
            <p className="mt-2 text-zinc-600">
              Ideal for small teams starting out.
            </p>
            <p className="mt-6 text-4xl font-bold text-indigo-600">Free</p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li>✔ Up to 3 notes</li>
              <li>✔ Secure multi-tenant access</li>
              <li>✔ Role-based access (Admin & Member)</li>
            </ul>
            <Button
              size="lg"
              className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-full"
            >
              Get Started
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition border-2 border-indigo-600">
            <h3 className="text-2xl font-bold text-zinc-900">Pro Plan</h3>
            <p className="mt-2 text-zinc-600">
              Perfect for growing teams with more storage needs.
            </p>
            <p className="mt-6 text-4xl font-bold text-purple-600">$10/mo</p>
            <ul className="mt-6 space-y-3 text-zinc-700">
              <li>✔ Unlimited notes</li>
              <li>✔ Everything in Free Plan</li>
              <li>✔ Priority support</li>
            </ul>
            <Button
              size="lg"
              className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white w-full"
            >
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
