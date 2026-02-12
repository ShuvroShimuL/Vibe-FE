import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="section-container pt-16 md:pt-20 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-navy-foreground">Prelination</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Bangladesh's most trusted platform for government job exam preparation.
              Practice with 20,000+ questions and achieve your dream career.
            </p>
            <div className="flex gap-3 mt-5">
              {["Facebook", "YouTube", "LinkedIn", "Telegram"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-muted-foreground/10 flex items-center justify-center text-xs text-muted-foreground hover:text-navy-foreground hover:bg-muted-foreground/20 transition-colors"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold text-navy-foreground mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Blog", "Success Stories", "Pricing", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-navy-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Exams */}
          <div>
            <h4 className="text-base font-semibold text-navy-foreground mb-5">Exams</h4>
            <ul className="space-y-3">
              {["PTA Exams", "BCS Exams", "NTRCA Exams", "Bank Jobs", "All Question Banks"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-navy-foreground transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-semibold text-navy-foreground mb-5">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                support@prelination.com
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                +880 1XXX-XXXXXX
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-muted-foreground/15 mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Prelination. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy-foreground transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
