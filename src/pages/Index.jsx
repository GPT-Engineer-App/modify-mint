import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import BlogSection from "./BlogSection";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-background py-4 absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/ai-innovators-logo.png" alt="AI Innovators Logo" className="h-12 mr-4" />
            <h1 className="text-2xl font-bold text-foreground">AI Innovators</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-primary hover:underline">Home</Link>
            <Link to="#about" className="text-foreground hover:text-primary hover:underline">About AI</Link>
            <Link to="#services" className="text-foreground hover:text-primary hover:underline">Our Services</Link>
            <Link to="#blog" className="text-foreground hover:text-primary hover:underline">AI Insights</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex-grow">
        {/* About AI Section */}
        <section id="about" className="py-16 container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 text-center">About Artificial Intelligence</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Machine Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Discover how machines learn from data to make intelligent decisions and predictions.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Natural Language Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Explore AI's ability to understand, interpret, and generate human language.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Computer Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Learn how AI enables machines to interpret and understand visual information from the world.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* Blog Section */}
        <section id="blog">
          <BlogSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;