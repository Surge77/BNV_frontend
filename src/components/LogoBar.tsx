const logos = [
  {
    name: "Amazon",
    svg: (
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground whitespace-nowrap">
        amazon
      </div>
    )
  },
  {
    name: "Dribbble",
    svg: (
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic text-foreground whitespace-nowrap">
        dribbble
      </div>
    )
  },
  {
    name: "HubSpot",
    svg: (
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground whitespace-nowrap">
        HubSpot
      </div>
    )
  },
  {
    name: "Notion",
    svg: (
      <div className="flex items-center gap-1 sm:gap-2 whitespace-nowrap">
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 bg-foreground rounded-sm flex items-center justify-center flex-shrink-0">
          <span className="text-background font-bold text-xs sm:text-sm md:text-base">N</span>
        </div>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Notion</span>
      </div>
    )
  },
  {
    name: "Netflix",
    svg: (
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-foreground whitespace-nowrap">
        NETFLIX
      </div>
    )
  },
  {
    name: "Zoom",
    svg: (
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-foreground whitespace-nowrap">
        zoom
      </div>
    )
  },
];

const LogoBar = () => {
  return (
    <section className="w-full py-8 sm:py-12 md:py-16 overflow-hidden bg-background">
      {/* Moving stripe container */}
      <div className="relative w-full">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 min-w-full flex-shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`first-${logo.name}-${index}`}
                className="flex-shrink-0 hover:opacity-100 transition-opacity duration-300"
              >
                {logo.svg}
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 min-w-full flex-shrink-0">
            {logos.map((logo, index) => (
              <div
                key={`second-${logo.name}-${index}`}
                className="flex-shrink-0 hover:opacity-100 transition-opacity duration-300"
              >
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
