import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Free",
    price: "৳0",
    period: "/month",
    description: "Perfect for getting started",
    features: [
      { text: "5 practice exams per month", included: true },
      { text: "Basic analytics", included: true },
      { text: "Email support", included: true },
      { text: "Access to PTA questions", included: true },
      { text: "BCS & Bank questions", included: false },
      { text: "PDF reports", included: false },
      { text: "Retake system", included: false },
    ],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Premium",
    price: "৳299",
    period: "/month",
    badge: "MOST POPULAR",
    description: "Best for serious aspirants",
    features: [
      { text: "Unlimited practice exams", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Priority support", included: true },
      { text: "All exam categories", included: true },
      { text: "PDF reports via email", included: true },
      { text: "Full retake system", included: true },
      { text: "Category-wise practice", included: true },
      { text: "Progress tracking", included: true },
    ],
    cta: "Start Premium",
    featured: true,
  },
  {
    name: "Pro",
    price: "৳799",
    period: "/3 months",
    badge: "SAVE 30%",
    description: "Maximum value for dedicated students",
    features: [
      { text: "Everything in Premium", included: true },
      { text: "3 months access", included: true },
      { text: "Personal study plan", included: true },
      { text: "Expert guidance", included: true },
      { text: "Mock interview prep", included: true },
      { text: "Downloadable materials", included: true },
    ],
    cta: "Get Pro Access",
    featured: false,
  },
];

const PricingPlans = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="eyebrow-text">PRICING PLANS</p>
          <h2 className="section-heading">Choose Your Plan</h2>
          <p className="section-subheading mx-auto">
            Start free and upgrade when you're ready
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 md:p-10 border-2 transition-all ${
                plan.featured
                  ? "border-primary shadow-[0_8px_40px_hsl(224_76%_40%/0.2)] scale-[1.02] relative bg-card"
                  : "border-border bg-card shadow-card"
              }`}
            >
              {plan.badge && (
                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-4">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-xl font-bold text-navy">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-extrabold text-navy">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-3 text-sm">
                    {f.included ? (
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                    ) : (
                      <X className="w-4 h-4 text-destructive flex-shrink-0" />
                    )}
                    <span className={f.included ? "text-foreground" : "text-muted-foreground"}>
                      {f.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full mt-8"
                variant={plan.featured ? "default" : "outline"}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
