import { AboutUs, HeroSection, OurFeatures } from "@/components";
import CTA from "@/components/cta";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Promo from "@/components/promo";
import Testimonial from "@/components/testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />

      <OurFeatures />

      <AboutUs />
      {/* 
      <Features />

      <Testimonial />

      <Promo />

      <CTA />

      <Pricing /> */}
    </>
  );
}
