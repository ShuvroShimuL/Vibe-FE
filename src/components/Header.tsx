import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [examsOpen, setExamsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    {
      label: "Exams",
      href: "#",
      children: [
        { label: "PTA Exams", href: "/exams/pt" },
        { label: "BCS Exams", href: "/exams/bcs" },
        { label: "NTRCA", href: "/exams/ntrca" },
        { label: "Bank Jobs", href: "/exams/bank" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card shadow-[0_2px_20px_rgba(0,0,0,0.1)]"
          : "bg-card/80 backdrop-blur-sm"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16 md:h-[72px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-navy">Prelination</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-[15px] font-medium text-muted-foreground hover:text-navy transition-colors">
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card rounded-xl shadow-card-hover border border-border p-2 min-w-[180px]">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-navy hover:bg-section-light rounded-lg transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-muted-foreground hover:text-navy transition-colors"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" size="sm">
            Login
          </Button>
          <Button size="sm">Start Free</Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="section-container py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setExamsOpen(!examsOpen)}
                    className="w-full flex items-center justify-between py-3 text-[15px] font-medium text-muted-foreground"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${examsOpen ? "rotate-180" : ""}`} />
                  </button>
                  {examsOpen && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-muted-foreground hover:text-navy"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="block py-3 text-[15px] font-medium text-muted-foreground hover:text-navy"
                >
                  {item.label}
                </a>
              )
            )}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1">Login</Button>
              <Button className="flex-1">Start Free</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
