import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MAIN_NAV_LINKS } from "@/constants/navigation";
import { SocialLink } from "@/types";

const SOCIAL_LINKS: SocialLink[] = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
];

const CONTACT_INFO = [
  { label: "Email", value: "info@positivus.com" },
  { label: "Phone", value: "+1 (555) 123-4567" },
  { label: "Address", value: "123 Innovation Drive\nDigital District, CA 90210" },
];

const Footer = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would handle newsletter subscription
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-10 md:py-12 lg:py-16">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          {/* Logo & Nav */}
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2" aria-label="Positivus Home">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2L22.5 13.5L34 18L22.5 22.5L18 34L13.5 22.5L2 18L13.5 13.5L18 2Z" fill="currentColor" />
              </svg>
              <span className="text-xl md:text-2xl font-bold">Positivus</span>
            </a>

            {/* Nav Links */}
            <nav className="flex flex-wrap gap-4 md:gap-6" aria-label="Footer Navigation">
              {MAIN_NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors underline underline-offset-4"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-secondary-foreground text-secondary rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={`Visit our ${social.name} page`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 mt-10 md:mt-12 pt-8 border-t border-secondary-foreground/20">
          {/* Contact Info */}
          <div>
            <span className="inline-block bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium mb-4">
              Contact us:
            </span>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              {CONTACT_INFO.map((info) => (
                <p key={info.label}>
                  {info.label}: {info.value.includes("\n") ? (
                    <>
                      <br />
                      {info.value}
                    </>
                  ) : (
                    info.value
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-secondary-foreground/10 rounded-2xl p-6 lg:w-96">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Email"
                required
                className="flex-1 bg-transparent border-secondary-foreground/30 text-secondary-foreground placeholder:text-secondary-foreground/50 rounded-xl"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl px-6 whitespace-nowrap"
              >
                Subscribe to news
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-secondary-foreground/20">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} Positivus. All Rights Reserved.
          </p>
          <a
            href="#"
            className="text-sm text-secondary-foreground/80 underline underline-offset-4 hover:text-primary"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
