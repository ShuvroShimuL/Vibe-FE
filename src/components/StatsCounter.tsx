import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 20000, suffix: "+", label: "Total Questions" },
  { value: 50000, suffix: "+", label: "Active Students" },
  { value: 4, suffix: "", label: "Exam Categories" },
  { value: 95, suffix: "%", label: "Success Rate" },
];

const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-primary-foreground">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-16 md:py-20 bg-navy">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center ${
                i < stats.length - 1 ? "lg:border-r lg:border-muted-foreground/20" : ""
              }`}
            >
              <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              <p className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
