import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SignUpPage from "./components/signup";
import Features from "./components/feature";
import Footer from "./components/footer";
import ProductPage from "./components/ProductPage";
import PageHeader from "./components/pageheader";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <PageHeader />
        <HeroSection />
        <Features />
        <SignUpPage />
        <ProductPage/>
        <Footer />
      </main>
    </>
  );
}
