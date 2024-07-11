import TestimonialsTop from "./components/TestimonialsTop"
import Hero from "./components/Hero"
import Pricing from "./components/Pricing"
import Review from "./components/Review"
import SetupGuide from "./components/SetupGuide"
import Testimonials from "./components/Testimonials"
import ServicesDropdown from "./components/ServicesDropdown"
import Features from "./components/Features"
import NinjaTrader from "./components/NinjaTrader"
import RelatedProducts from "./components/RelatedProducts"
import FAQs from "./components/FAQs"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <>
      <main className="flex-auto">
        <Navbar />
        <TestimonialsTop />
        <Hero />
        <Pricing />
        <Review />
        <SetupGuide />
        <Testimonials />
        <ServicesDropdown />
        <Features />
        <FAQs />
        <NinjaTrader />
        <RelatedProducts />
        <Footer />
      </main>
    </>
  )
}
