import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PROCESS_STEPS } from "@/constants/process";
import { ProcessStep } from "@/types";
import { slideDown } from "@/utils/animations";

const ProcessItemComponent = ({ item, isOpen, onToggle }: {
  item: ProcessStep;
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
        aria-controls={`process-content-${item.number}`}
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
            id={`process-content-${item.number}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={slideDown}
            className="overflow-hidden"
          >
            <div className="pt-4 md:pt-6 border-t border-secondary mt-4 md:mt-6">
              <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{item.description}</p>
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
        {PROCESS_STEPS.map((item, index) => (
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
