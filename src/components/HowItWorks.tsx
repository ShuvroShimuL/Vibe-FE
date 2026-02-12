import { MousePointerClick, CalendarDays, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MousePointerClick,
    title: "Select Your Exam",
    description: "Choose from PTA, BCS, NTRCA, or Bank job exams",
  },
  {
    num: "02",
    icon: CalendarDays,
    title: "Pick Year Range",
    description: "Select which years' questions you want to practice from",
  },
  {
    num: "03",
    icon: Sparkles,
    title: "Generate Unique Set",
    description: "Our algorithm creates a fresh 90-question set instantly",
  },
  {
    num: "04",
    icon: TrendingUp,
    title: "Practice & Track Progress",
    description: "Take the exam, get detailed analytics, and improve",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="eyebrow-text">HOW IT WORKS</p>
          <h2 className="section-heading">Start Practicing in 4 Simple Steps</h2>
          <p className="section-subheading mx-auto">
            Our intelligent system creates unique question sets tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[3px] bg-border" />

          {steps.map((step, i) => (
            <div key={step.num} className="text-center relative">
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-card border-[3px] border-border flex items-center justify-center mx-auto relative z-10">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Large Number */}
              <div className="text-6xl font-extrabold text-border/60 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 select-none pointer-events-none">
                {step.num}
              </div>

              <h3 className="text-lg font-bold text-navy mt-5">{step.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
