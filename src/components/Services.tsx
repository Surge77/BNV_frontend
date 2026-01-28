import { ArrowUpRight } from "lucide-react";
import serviceSeo from "@/assets/service-seo.png";
import servicePpc from "@/assets/service-ppc.png";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  variant: "light" | "lime" | "dark";
  image?: string;
}

const ServiceCard = ({ title, variant, image }: ServiceCardProps) => {
  const bgClass = {
    light: "bg-card",
    lime: "bg-primary",
    dark: "bg-secondary",
  }[variant];

  const textClass = variant === "dark" ? "text-secondary-foreground" : "text-foreground";
  const arrowBg = variant === "dark" ? "bg-secondary-foreground" : "bg-secondary";
  const arrowColor = variant === "dark" ? "text-secondary" : "text-secondary-foreground";

  // Split title into two lines for the badge
  const titleParts = title.split(" ");
  const midPoint = Math.ceil(titleParts.length / 2);
  const firstLine = titleParts.slice(0, midPoint).join(" ");
  const secondLine = titleParts.slice(midPoint).join(" ");

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`service-card ${bgClass} ${textClass} relative overflow-hidden`}
    >
      {/* Title Badge */}
      <div className="mb-auto">
        <div className={`inline-block px-2 py-1 rounded-md text-base md:text-lg font-medium ${variant === "light" ? "bg-primary text-foreground" : variant === "lime" ? "bg-foreground text-background" : "bg-primary text-foreground"}`}>
          {firstLine}
        </div>
        {secondLine && (
          <div className={`inline-block px-2 py-1 rounded-md text-base md:text-lg font-medium mt-1 ${variant === "light" ? "bg-primary text-foreground" : variant === "lime" ? "bg-foreground text-background" : "bg-primary text-foreground"}`}>
            {secondLine}
          </div>
        )}
      </div>

      {/* Image positioned absolutely on the right */}
      {image && (
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 md:w-40 lg:w-48">
          <img src={image} alt={title} className="w-full h-auto object-contain opacity-90" />
        </div>
      )}

      {/* Learn More Link */}
      <a
        href="#"
        className="flex items-center gap-2 mt-16 group relative z-10"
      >
        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${arrowBg}`}>
          <ArrowUpRight className={`w-4 h-4 ${arrowColor} group-hover:rotate-45 transition-transform`} />
        </span>
        <span className="text-sm md:text-base font-normal">
          Learn more
        </span>
      </a>
    </motion.div>
  );
};

const services = [
  { title: "Search engine optimization", variant: "light" as const, image: serviceSeo },
  { title: "Pay-per-click advertising", variant: "lime" as const, image: servicePpc },
];

const Services = () => {
  return (
    <section id="services" className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8 md:mb-12">
        <h2 className="section-heading">Services</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl">
          Comprehensive digital solutions designed to elevate your brand and accelerate business growth through strategic marketing initiatives.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
