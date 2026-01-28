import serviceSeo from "@/assets/service-seo.png";
import servicePpc from "@/assets/service-ppc.png";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { ServiceItem } from "@/types";
import { fadeIn } from "@/utils/animations";

const SERVICES_DATA: ServiceItem[] = [
  { title: "Search engine optimization", variant: "light", image: serviceSeo },
  { title: "Pay-per-click advertising", variant: "lime", image: servicePpc },
  { title: "Social Media Marketing", variant: "dark", image: serviceSeo },
  { title: "Email Marketing", variant: "light", image: servicePpc },
  { title: "Content Creation", variant: "lime", image: serviceSeo },
  { title: "Analytics & Tracking", variant: "dark", image: servicePpc },
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
        {SERVICES_DATA.map((service, index) => (
          <motion.div
            key={service.title}
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
