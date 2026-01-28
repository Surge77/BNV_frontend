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

  const titleParts = title.split(" ");
  const firstLine = titleParts.slice(0, Math.ceil(titleParts.length / 2)).join(" ");
  const secondLine = titleParts.slice(Math.ceil(titleParts.length / 2)).join(" ");

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`service-card ${bgClass} ${textClass} flex flex-col md:flex-row items-start md:items-end justify-between gap-4 min-h-[180px] md:min-h-[200px]`}
    >
      <div className="flex flex-col justify-between h-full flex-1">
        <div>
          <span className={`inline-block px-2 py-1 rounded-md text-lg md:text-xl font-medium ${variant === "light" ? "bg-primary" : variant === "lime" ? "bg-background" : "bg-primary text-foreground"}`}>
            {firstLine}
          </span>
          {secondLine && (
            <span className={`block mt-1 px-2 py-1 rounded-md text-lg md:text-xl font-medium w-fit ${variant === "light" ? "bg-primary" : variant === "lime" ? "bg-background" : "bg-primary text-foreground"}`}>
              {secondLine}
            </span>
          )}
        </div>
        
        <a 
          href="#" 
          className="flex items-center gap-2 mt-4 group"
        >
          <span className={`flex items-center justify-center w-8 h-8 rounded-full ${arrowBg}`}>
            <ArrowUpRight className={`w-4 h-4 ${arrowColor} group-hover:rotate-45 transition-transform`} />
          </span>
          <span className="text-sm md:text-base font-medium underline-offset-4 hover:underline">
            Learn more
          </span>
        </a>
      </div>

      {image && (
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img src={image} alt={title} className="w-full h-auto object-contain" />
        </div>
      )}
    </motion.div>
  );
};

const services = [
  { title: "Search Engine Optimization", variant: "light" as const, image: serviceSeo },
  { title: "Pay-Per-Click Advertising", variant: "lime" as const, image: servicePpc },
  { title: "Social Media Strategy", variant: "dark" as const },
  { title: "Email Marketing Automation", variant: "light" as const },
  { title: "Content Strategy & Creation", variant: "lime" as const },
  { title: "Performance Analytics", variant: "dark" as const },
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
