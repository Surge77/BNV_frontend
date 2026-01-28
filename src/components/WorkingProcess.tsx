import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProcessItem {
  number: string;
  title: string;
  description: string;
}

const processItems: ProcessItem[] = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We begin with an in-depth analysis of your business objectives, target audience, and competitive landscape. This comprehensive discovery phase allows us to craft a tailored digital marketing strategy that aligns perfectly with your goals.",
  },
  {
    number: "02",
    title: "Market Research & Planning",
    description: "Our team conducts extensive market research and competitor analysis to identify opportunities and develop a data-driven approach that positions your brand for maximum impact and growth.",
  },
  {
    number: "03",
    title: "Campaign Development",
    description: "We design and develop compelling campaigns across your chosen digital channels, ensuring consistent brand messaging and creative excellence that resonates with your target audience.",
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description: "Once campaigns are live, we continuously monitor performance metrics and make strategic adjustments to maximize results, ensuring optimal return on your marketing investment.",
  },
  {
    number: "05",
    title: "Performance Tracking",
    description: "Through detailed analytics and regular reporting, we provide transparent insights into campaign performance, key metrics, and actionable recommendations for sustained growth.",
  },
  {
    number: "06",
    title: "Continuous Innovation",
    description: "We believe in evolving with the digital landscape. Based on performance data and market trends, we continuously refine and enhance strategies to maintain your competitive edge.",
  },
];

const ProcessItemComponent = ({ item, isOpen, onToggle }: { 
  item: ProcessItem; 
  isOpen: boolean; 
  onToggle: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`process-item border-secondary ${isOpen ? "process-item-expanded" : "bg-card shadow-card"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-3xl md:text-5xl font-medium">{item.number}</span>
          <span className="text-lg md:text-2xl font-medium text-left">{item.title}</span>
        </div>
        <span className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border border-secondary flex items-center justify-center ${isOpen ? "bg-background" : "bg-card"}`}>
          {isOpen ? <Minus className="w-5 h-5 md:w-6 md:h-6" /> : <Plus className="w-5 h-5 md:w-6 md:h-6" />}
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 md:pt-6 border-t border-secondary mt-4 md:mt-6">
              <p className="text-sm md:text-base text-foreground/80">{item.description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const WorkingProcess = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="process" className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8 md:mb-12">
        <h2 className="section-heading">Our Working Process</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-md">
          Our proven methodology for delivering exceptional digital marketing results.
        </p>
      </div>

      {/* Process Items */}
      <div className="flex flex-col gap-4 md:gap-6">
        {processItems.map((item, index) => (
          <ProcessItemComponent
            key={item.number}
            item={item}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
