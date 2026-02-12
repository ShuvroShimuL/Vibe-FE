import { useState } from "react";
import { Check, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "Which country won the FIFA World Cup 2022?",
    options: ["Argentina", "Brazil", "France", "Germany"],
    answer: 0,
  },
  {
    question: "What is the capital of Bangladesh?",
    options: ["Chittagong", "Dhaka", "Sylhet", "Rajshahi"],
    answer: 1,
  },
  {
    question: "Who wrote the National Anthem of Bangladesh?",
    options: ["Kazi Nazrul Islam", "Rabindranath Tagore", "Jasimuddin", "Michael Madhusudan Dutt"],
    answer: 1,
  },
  {
    question: "Which river is the longest in Bangladesh?",
    options: ["Meghna", "Jamuna", "Padma", "Brahmaputra"],
    answer: 3,
  },
  {
    question: "In which year did Bangladesh gain independence?",
    options: ["1947", "1952", "1971", "1975"],
    answer: 2,
  },
];

const features = [
  "90 questions per exam set",
  "Timer-based practice",
  "Instant result with explanations",
  "Category-wise performance breakdown",
  "PDF report via email",
  "Retake option for weak areas",
];

const LiveDemoQuiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) setScore((s) => s + 1);
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const progress = ((current + (finished ? 1 : 0)) / questions.length) * 100;

  return (
    <section className="section-padding gradient-navy">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Quiz Card */}
          <div className="bg-card rounded-2xl p-6 md:p-10 shadow-card-hover border-2 border-border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-navy">Try a Sample Quiz</h3>
                <p className="text-sm text-muted-foreground">5 questions from BCS exams</p>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                2:30
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-border rounded-full mb-6">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {finished ? (
              <div className="text-center py-8">
                <div className="text-5xl font-extrabold text-primary mb-2">
                  {score}/{questions.length}
                </div>
                <p className="text-muted-foreground">
                  {score >= 4 ? "Excellent! You're well prepared!" : "Keep practicing to improve!"}
                </p>
                <Button
                  className="mt-6"
                  onClick={() => {
                    setCurrent(0);
                    setSelected(null);
                    setScore(0);
                    setFinished(false);
                  }}
                >
                  Retake Quiz
                </Button>
              </div>
            ) : (
              <>
                <p className="text-xs font-medium text-muted-foreground mb-2">
                  Question {current + 1} of {questions.length}
                </p>
                <p className="text-lg font-semibold text-navy mb-5">
                  {questions[current].question}
                </p>

                <div className="space-y-3">
                  {questions[current].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all text-sm font-medium ${
                        selected === i
                          ? "border-primary bg-accent/10 text-navy"
                          : "border-border text-muted-foreground hover:border-accent"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <Button
                  className="w-full mt-6"
                  disabled={selected === null}
                  onClick={handleNext}
                >
                  {current === questions.length - 1 ? "Finish Quiz" : "Next Question"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </>
            )}
          </div>

          {/* Right Info */}
          <div className="text-navy-foreground">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Experience Our Exam Interface
            </h2>
            <ul className="mt-8 space-y-4">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-navy-foreground/80">
                  <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-success" />
                  </div>
                  <span className="text-base">{f}</span>
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="mt-10 bg-warning text-warning-foreground hover:bg-warning/90 shadow-warning text-base font-bold px-8 py-6"
            >
              Create Free Account
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDemoQuiz;
