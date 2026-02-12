import { Shuffle, BarChart3, FileText, History, RotateCcw, Smartphone } from "lucide-react";

const features = [
  {
    icon: Shuffle,
    title: "Unique Question Sets",
    description: "Never see the same question combination twice. Our algorithm generates fresh sets every time.",
  },
  {
    icon: BarChart3,
    title: "Detailed Analytics",
    description: "Track your performance by category, identify weak areas, and focus your study efforts.",
  },
  {
    icon: FileText,
    title: "PDF Result Reports",
    description: "Get comprehensive exam results delivered straight to your email inbox.",
  },
  {
    icon: History,
    title: "Previous Year Questions",
    description: "Practice with authentic questions from past BCS, PTA, NTRCA, and Bank exams.",
  },
  {
    icon: RotateCcw,
    title: "Smart Retake System",
    description: "Retake full exams or focus on specific categories where you need improvement.",
  },
  {
    icon: Smartphone,
    title: "Practice Anywhere",
    description: "Access your exams on any device - desktop, tablet, or mobile phone.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="section-padding bg-section-light">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="eyebrow-text">WHY CHOOSE PRELINATION</p>
          <h2 className="section-heading">Features That Set Us Apart</h2>
          <p className="section-subheading mx-auto">
            Everything you need to ace your government job exams
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-8 border border-border hover:shadow-card-hover hover:border-accent transition-all duration-300 group"
            >
              <f.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" strokeWidth={1.8} />
              <h3 className="text-lg font-semibold text-navy mt-5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
