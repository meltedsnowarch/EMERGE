import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceBuckets from "@/components/ServiceBuckets";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main data-design-id="page-main">
      <Header />
      <Hero />
      <ServiceBuckets />
      <Footer />
    </main>
  );
}
