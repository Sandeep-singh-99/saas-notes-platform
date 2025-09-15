import CTA from "@/components/CallToAction";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Intro from "@/intro/page";


export default function Home() {
  return (
    <div>
      <Intro />

      <Features />

      <Pricing />

      <CTA />
    </div>
  );
}
