import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { ServiceItem } from "@/types";

interface ServiceCardProps extends ServiceItem { }

const ServiceCard = ({ title, variant, image }: ServiceCardProps) => {
    const bgClass = {
        light: "bg-card",
        lime: "bg-primary",
        dark: "bg-secondary",
    }[variant];

    const textClass = variant === "dark" ? "text-secondary-foreground" : "text-foreground";
    const arrowBg = variant === "dark" ? "bg-secondary-foreground" : "bg-secondary";
    const arrowColor = variant === "dark" ? "text-secondary" : "text-secondary-foreground";

    // Split title into two lines for the badge layout
    const titleParts = title.split(" ");
    const midPoint = Math.ceil(titleParts.length / 2);
    const firstLine = titleParts.slice(0, midPoint).join(" ");
    const secondLine = titleParts.slice(midPoint).join(" ");

    return (
        <motion.div
            whileHover={{ y: -4 }}
            className={`service-card ${bgClass} ${textClass} relative overflow-hidden h-full`}
        >
            {/* Title BadgeWrapper */}
            <div className="mb-auto">
                <h3 className="sr-only">{title}</h3>
                <div className={`inline-block px-2 py-1 rounded-md text-base md:text-lg font-medium ${variant === "light" ? "bg-primary text-foreground" : variant === "lime" ? "bg-foreground text-background" : "bg-primary text-foreground"}`} aria-hidden="true">
                    {firstLine}
                </div>
                {secondLine && (
                    <div className={`inline-block px-2 py-1 rounded-md text-base md:text-lg font-medium mt-1 ${variant === "light" ? "bg-primary text-foreground" : variant === "lime" ? "bg-foreground text-background" : "bg-primary text-foreground"}`} aria-hidden="true">
                        {secondLine}
                    </div>
                )}
            </div>

            {/* Image positioned absolutely on the right */}
            {image && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 md:w-40 lg:w-48">
                    <img
                        src={image}
                        alt=""
                        className="w-full h-auto object-contain opacity-90"
                        loading="lazy"
                    />
                </div>
            )}

            {/* Learn More Link */}
            <a
                href="#"
                className="flex items-center gap-2 mt-16 group relative z-10 w-fit"
                aria-label={`Learn more about ${title}`}
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

export default ServiceCard;
