import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";

const ContactCTA = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="relative bg-card rounded-4xl md:rounded-5xl p-8 md:p-12 lg:p-16 overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-lg">
              Let's discuss how our proven digital marketing strategies can transform your business and drive the results you've been looking for.
            </p>
            <Button
              size="lg"
              className="mt-6 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Your Strategy Session
            </Button>
          </div>

          {/* Decorative illustration placeholder */}
          <div className="hidden lg:block flex-1">
            <div className="relative w-full h-48" aria-hidden="true">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary rounded-full opacity-50 blur-xl" />
              <div className="absolute bottom-0 right-16 w-16 h-16 bg-secondary rounded-full" />
              <div className="absolute top-8 right-32 w-12 h-12 bg-primary rounded-lg rotate-12" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
