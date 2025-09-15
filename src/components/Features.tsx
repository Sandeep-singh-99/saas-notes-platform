import { Lightbulb, ShieldCheck, Users } from "lucide-react";

const features = [
  {
    title: "Multi-Tenant Architecture",
    description:
      "Isolate data securely for each company. Acme's notes will never mix with Globex's.",
    icon: Users,
  },
  {
    title: "Secure & Role-Based",
    description:
      "Admins manage users & upgrades. Members focus only on creating and managing notes.",
    icon: ShieldCheck,
  },
  {
    title: "Simple, Yet Powerful",
    description:
      "Create, edit, and organize notes effortlessly with a clean modern UI.",
    icon: Lightbulb,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">
          Why Choose <span className="text-indigo-600">MultiNotes</span>?
        </h2>
        <p className="mt-4 text-lg text-zinc-600">
          Powerful features to make your team more productive and organized.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition"
            >
              <feature.icon className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-zinc-900">
                {feature.title}
              </h3>
              <p className="mt-2 text-zinc-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
