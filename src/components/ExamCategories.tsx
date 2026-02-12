import { GraduationCap, Building2, Users, Landmark, ArrowRight } from "lucide-react";

const categories = [
  {
    icon: GraduationCap,
    title: "PTA Exams",
    count: "2,700+ Questions",
    description: "Primary Teachers Assistant exam preparation with questions from 2018-2023",
    badge: "Most Popular",
    badgeColor: "bg-destructive",
    gradient: "from-exam-pta to-purple-700",
    href: "/exams/pt",
  },
  {
    icon: Building2,
    title: "BCS Exams",
    count: "1,400+ Questions",
    description: "Complete BCS preliminary preparation from 40th to 50th BCS examinations",
    badge: "Updated",
    badgeColor: "bg-accent",
    gradient: "from-exam-bcs to-sky-700",
    href: "/exams/bcs",
  },
  {
    icon: Users,
    title: "NTRCA Exams",
    count: "Coming Soon",
    description: "Non-Government Teachers' Registration & Certification Authority exam prep",
    badge: "New",
    badgeColor: "bg-exam-ntrca",
    gradient: "from-exam-ntrca to-orange-700",
    href: "/exams/ntrca",
  },
  {
    icon: Landmark,
    title: "Bank Jobs",
    count: "1,200+ Questions",
    description: "Bank recruitment exam preparation for all major Bangladesh banks",
    badge: "Trending",
    badgeColor: "bg-success",
    gradient: "from-exam-bank to-emerald-700",
    href: "/exams/bank",
  },
];

const ExamCategories = () => {
  return (
    <section className="section-padding bg-section-light">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="eyebrow-text">EXAM CATEGORIES</p>
          <h2 className="section-heading">Choose Your Exam Type</h2>
          <p className="section-subheading mx-auto">
            Comprehensive question banks for all major Bangladesh government job exams
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
            >
              {/* Badge */}
              <span className={`inline-block text-xs font-bold text-primary-foreground px-3 py-1 rounded-full ${cat.badgeColor} mb-4`}>
                {cat.badge}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-5`}>
                <cat.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold text-navy">{cat.title}</h3>
              <p className="text-sm font-semibold text-primary mt-2">{cat.count}</p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">{cat.description}</p>

              <div className="flex items-center gap-1 text-sm font-semibold text-primary mt-5 group-hover:gap-2 transition-all">
                View Questions <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamCategories;
