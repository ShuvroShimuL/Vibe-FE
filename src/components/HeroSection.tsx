import { Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="bg-card relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl -translate-y-1/2 translate-x-1/4" />

      <div className="section-container pt-20 pb-16 md:pt-28 md:pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Trophy className="w-4 h-4" />
              #1 Exam Prep Platform in Bangladesh
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-navy leading-[1.2] tracking-tight">
              Master Bangladesh Government Job Exams with{" "}
              <span className="text-primary">Confidence</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mt-6 max-w-[540px]">
              Practice with 20,000+ previous year questions from BCS, PTA, NTRCA,
              and Bank exams. Our unique algorithm ensures you never see the same
              question set twice.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" className="shadow-primary text-base px-8 py-6 font-semibold">
                Start Free Practice
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 py-6 font-semibold">
                View Demo Exam
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-3 mt-8 text-sm text-muted-foreground">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>
              <span className="font-medium">4.9/5 from 10,000+ students</span>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Student preparing for government job exam"
              className="w-full max-w-[480px] drop-shadow-2xl"
            />

            {/* Floating Stats Cards */}
            <div className="absolute top-4 right-0 bg-card rounded-xl shadow-card-hover px-4 py-3 flex items-center gap-3 animate-fade-in-up">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-primary font-bold text-sm">
                20K+
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">Questions</p>
                <p className="text-xs text-muted-foreground">Available</p>
              </div>
            </div>

            <div className="absolute bottom-16 left-0 bg-card rounded-xl shadow-card-hover px-4 py-3 flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center text-success font-bold text-sm">
                90%
              </div>
              <div>
                <p className="text-sm font-semibold text-navy">Success Rate</p>
                <p className="text-xs text-muted-foreground">Our students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
