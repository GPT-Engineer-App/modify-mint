import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import BlogSection from "./BlogSection";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-background py-4 absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">AI Innovators</h1>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-primary hover:underline">Home</Link>
            <Link to="#about" className="text-foreground hover:text-primary hover:underline">About AI</Link>
            <Link to="#blog" className="text-foreground hover:text-primary hover:underline">AI Insights</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* About AI Section */}
        <section id="about" className="mb-16">
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

        {/* Blog Section */}
        <section id="blog">
          <BlogSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background py-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AspectRatio ratio={16 / 3}>
            <img
              src="/ai-footer.png"
              alt="AI-powered future"
              className="object-cover w-full h-full opacity-30"
            />
          </AspectRatio>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-foreground">© 2023 AI Innovators - Shaping the Future with Artificial Intelligence</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;