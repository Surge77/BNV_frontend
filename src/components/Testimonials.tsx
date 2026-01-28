import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/constants/testimonials";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section id="testimonials" className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-8 md:mb-12">
        <h2 className="section-heading">Testimonials</h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl">
          Discover how we've helped businesses achieve remarkable growth and digital transformation success.
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div
        className="bg-secondary rounded-4xl md:rounded-5xl p-6 md:p-10 lg:p-16"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        role="region"
        aria-label="Testimonials carousel"
      >
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-12"
            >
              {/* Main testimonial */}
              <div className="flex-1">
                <div className="testimonial-card testimonial-bubble">
                  <p className="text-sm md:text-base text-secondary-foreground/90 leading-relaxed">
                    "{TESTIMONIALS[currentIndex].quote}"
                  </p>
                </div>
                <div className="mt-8 ml-6">
                  <p className="text-primary font-medium text-lg">{TESTIMONIALS[currentIndex].author}</p>
                  <p className="text-secondary-foreground/70 text-sm mt-1">{TESTIMONIALS[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8 md:mt-12">
          <button
            onClick={prevSlide}
            className="text-secondary-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${index === currentIndex ? "bg-primary" : "bg-secondary-foreground/30"
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-secondary-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
