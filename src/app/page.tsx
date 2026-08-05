import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustIndicators from "@/components/sections/TrustIndicators";
import IndustryCategories from "@/components/sections/IndustryCategories";
import FeaturedServices from "@/components/sections/FeaturedServices";
import ProductCollections from "@/components/sections/ProductCollections";
import ManufacturingProcess from "@/components/sections/ManufacturingProcess";
import WhyAmal from "@/components/sections/WhyAmal";
import Customisation from "@/components/sections/Customisation";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1" id="main-content">
        <Hero />
        <TrustIndicators />
        <IndustryCategories />
        <FeaturedServices />
        <ProductCollections />
        <ManufacturingProcess />
        <WhyAmal />
        <Customisation />
        <Gallery />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
