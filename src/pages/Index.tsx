import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExamCategories from "@/components/ExamCategories";
import HowItWorks from "@/components/HowItWorks";
import LiveDemoQuiz from "@/components/LiveDemoQuiz";
import KeyFeatures from "@/components/KeyFeatures";
import StatsCounter from "@/components/StatsCounter";
import PricingPlans from "@/components/PricingPlans";
import Testimonials from "@/components/Testimonials";
import BlogPosts from "@/components/BlogPosts";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroSection />
        <ExamCategories />
        <HowItWorks />
        <LiveDemoQuiz />
        <KeyFeatures />
        <StatsCounter />
        <PricingPlans />
        <Testimonials />
        <BlogPosts />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
