import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.png";
import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/utils/animations";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight tracking-tight">
            Navigating the digital landscape for success
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
            We craft data-driven marketing strategies that amplify your brand's reach, engage your audience, and drive measurable growth across all digital channels.
          </p>
          <Button
            size="lg"
            className="mt-6 md:mt-8 rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-6 text-base font-medium"
          >
            Start Your Journey
          </Button>
        </motion.div>

        {/* Hero Illustration */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
          className="flex-1 w-full max-w-md lg:max-w-lg"
        >
          <img
            src={heroIllustration}
            alt="Digital marketing megaphone illustration with social media icons"
            className="w-full h-auto"
            width={600}
            height={400}
            loading="eager"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
