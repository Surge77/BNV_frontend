import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Working with Positivus has been transformative for our business. Their strategic approach to digital marketing increased our website traffic by 300% and generated qualified leads that converted into substantial revenue growth. The team's expertise and dedication to our success is unmatched.",
    author: "Sarah Mitchell",
    role: "CEO at TechFlow Solutions",
  },
  {
    quote: "Positivus completely revolutionized our online presence. Their data-driven strategies and creative campaigns helped us achieve a 250% increase in conversions within six months. They truly understand what it takes to succeed in today's digital landscape.",
    author: "Marcus Rodriguez",
    role: "Marketing Director at InnovateCorp",
  },
  {
    quote: "The results speak for themselves. Positivus's comprehensive approach to SEO and content marketing positioned us as industry leaders. Our organic search visibility improved dramatically, and we're now capturing market share we never thought possible.",
    author: "Jennifer Chen",
    role: "Founder at GrowthLab",
  },
  {
    quote: "Positivus's social media expertise transformed our brand engagement. Our follower growth increased by 400%, but more importantly, we're now connecting with our target audience in meaningful ways that drive real business results.",
    author: "David Thompson",
    role: "Brand Manager at Elevate Retail",
  },
  {
    quote: "From strategy to execution, Positivus delivers exceptional results. Their team became an extension of ours, providing insights and recommendations that consistently exceeded our expectations. We couldn't be happier with our partnership.",
    author: "Lisa Park",
    role: "VP of Marketing at Pinnacle Financial",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
      <div className="bg-secondary rounded-4xl md:rounded-5xl p-6 md:p-10 lg:p-16">
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
                    "{testimonials[currentIndex].quote}"
                  </p>
                </div>
                <div className="mt-8 ml-6">
                  <p className="text-primary font-medium text-lg">{testimonials[currentIndex].author}</p>
                  <p className="text-secondary-foreground/70 text-sm mt-1">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8 md:mt-12">
          <button
            onClick={prevSlide}
            className="text-secondary-foreground hover:text-primary transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-sm transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-secondary-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="text-secondary-foreground hover:text-primary transition-colors"
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
