import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredibilityBar from "@/components/CredibilityBar";
import ServiceBuckets from "@/components/ServiceBuckets";
import HowItWorks from "@/components/HowItWorks";
import PricingSnapshot from "@/components/PricingSnapshot";
import TrustStatement from "@/components/TrustStatement";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main data-design-id="page-main">
      <Header />
      <Hero />
      <CredibilityBar />
      <ServiceBuckets />
      <HowItWorks />
      <PricingSnapshot />
      <TrustStatement />
      <ContactCTA />
      <Footer />
    </main>
  );
}
