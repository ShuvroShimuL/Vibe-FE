import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Prelination helped me crack BCS 45th. The unique question sets ensured I practiced every possible variation. Got my dream posting!",
    name: "Rahim Ahmed",
    role: "BCS 45th Batch, Administration",
    rating: 5,
  },
  {
    quote: "The analytics feature is a game-changer. I could see exactly which subjects needed more attention. Cleared PTA in my first attempt!",
    name: "Fatima Rahman",
    role: "Primary Teacher, Dhaka",
    rating: 5,
  },
  {
    quote: "PDF reports in my email helped me track progress over time. The retake system for weak areas was incredibly useful.",
    name: "Kamal Hossain",
    role: "Senior Officer, Sonali Bank",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-section-light">
      <div className="section-container">
        <div className="text-center mb-14">
          <p className="eyebrow-text">STUDENT SUCCESS STORIES</p>
          <h2 className="section-heading">What Our Students Say</h2>
          <p className="section-subheading mx-auto">
            Join thousands of successful candidates who achieved their dream jobs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-border shadow-card"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              <p className="text-sm text-foreground/80 leading-relaxed italic">
                "{t.quote}"
              </p>

              <div className="flex mt-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
