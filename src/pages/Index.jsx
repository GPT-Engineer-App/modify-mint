import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import BlogSection from "./BlogSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-background py-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AspectRatio ratio={16 / 5}>
            <img
              src="/ai-banner.png"
              alt="AI-powered technology"
              className="object-cover w-full h-full opacity-50"
            />
          </AspectRatio>
        </div>
        <div className="container mx-auto px-4 relative z-10 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">AI Innovators</h1>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-primary hover:underline">Home</Link>
            <Link to="#about" className="text-foreground hover:text-primary hover:underline">About AI</Link>
            <Link to="#blog" className="text-foreground hover:text-primary hover:underline">AI Insights</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">Revolutionizing the Future with AI</h2>
            <p className="mb-6 text-foreground">Explore the cutting-edge world of artificial intelligence and its transformative impact on industries, society, and our daily lives.</p>
            <Button>Discover AI Solutions</Button>
          </div>
          <Card className="md:w-1/2 overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src="/ai-visualization.png"
                alt="AI visualization"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
        </div>

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