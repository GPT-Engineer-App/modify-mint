import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-100 py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Bare Bones App</h1>
          <nav className="mt-2">
            <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to Bare Bones App</h2>
        <p className="mb-6">This is a minimal web application template. Start building your app by modifying this structure.</p>
        <Button>Get Started</Button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Bare Bones App</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;