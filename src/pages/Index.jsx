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
              src="/abstract-1.png"
              alt="Abstract header background"
              className="object-cover w-full h-full opacity-50"
            />
          </AspectRatio>
        </div>
        <div className="container mx-auto px-4 relative z-10 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-foreground">Bare Bones App</h1>
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-primary hover:underline">Home</Link>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4 text-foreground">Welcome to Bare Bones App</h2>
            <p className="mb-6 text-foreground">This is a minimal web application template. Start building your app by modifying this structure.</p>
            <Button>Get Started</Button>
          </div>
          <Card className="md:w-1/2 overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img
                src="/abstract-2.png"
                alt="Abstract decoration"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </Card>
        </div>

        {/* Blog Section */}
        <BlogSection />
      </main>

      {/* Footer */}
      <footer className="bg-background py-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AspectRatio ratio={16 / 3}>
            <img
              src="/abstract-3.png"
              alt="Abstract footer background"
              className="object-cover w-full h-full opacity-30"
            />
          </AspectRatio>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-foreground">© 2023 Bare Bones App</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;