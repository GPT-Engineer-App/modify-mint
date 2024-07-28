import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-4 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AspectRatio ratio={16 / 5}>
            <img
              src="/abstract-1.png"
              alt="Abstract header background"
              className="object-cover w-full h-full opacity-50"
            />
          </AspectRatio>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-2xl font-bold text-white">Bare Bones App</h1>
          <nav className="mt-2">
            <Link to="/" className="text-blue-200 hover:text-blue-100 hover:underline">Home</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">Welcome to Bare Bones App</h2>
            <p className="mb-6">This is a minimal web application template. Start building your app by modifying this structure.</p>
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 relative overflow-hidden">
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
          <p>© 2023 Bare Bones App</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;