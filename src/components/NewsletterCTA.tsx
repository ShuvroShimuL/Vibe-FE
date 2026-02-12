import { Button } from "@/components/ui/button";

const NewsletterCTA = () => {
  return (
    <section className="py-16 md:py-24 gradient-primary-reverse">
      <div className="section-container text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground leading-tight">
          Ready to Start Your Preparation?
        </h2>
        <p className="text-base md:text-lg text-primary-foreground/70 mt-4 max-w-xl mx-auto leading-relaxed">
          Join 50,000+ successful candidates. Create your free account today and
          take your first practice exam.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-10">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-lg text-base bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <Button className="bg-warning text-warning-foreground hover:bg-warning/90 shadow-warning font-bold px-8 py-4 text-base whitespace-nowrap">
            Get Started Free
          </Button>
        </div>

        <p className="text-sm text-primary-foreground/50 mt-4">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default NewsletterCTA;
