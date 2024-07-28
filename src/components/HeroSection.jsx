import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[75vh] w-full overflow-hidden">
      <AspectRatio ratio={16 / 9} className="h-full w-full">
        <img
          src="/ai-hero-image.png"
          alt="AI-generated technology visualization"
          className="object-cover w-full h-full"
        />
      </AspectRatio>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-8">
        <img src="/ai-innovators-logo.png" alt="AI Innovators Logo" className="w-64 mb-8" />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          Revolutionizing the Future with AI
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-3xl">
          Explore the intersection of technology, intelligence, and innovation
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          Discover More
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;