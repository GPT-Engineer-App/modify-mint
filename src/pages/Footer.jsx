import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">AI Innovators</h3>
            <p className="mb-4">Shaping the Future with Artificial Intelligence</p>
            <p>© 2023 AI Innovators. All rights reserved.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary hover:underline">Home</Link></li>
              <li><Link to="#about" className="hover:text-primary hover:underline">About AI</Link></li>
              <li><Link to="#services" className="hover:text-primary hover:underline">Our Services</Link></li>
              <li><Link to="#blog" className="hover:text-primary hover:underline">AI Insights</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><Link to="#services" className="hover:text-primary hover:underline">Privacy and Security</Link></li>
              <li><Link to="#services" className="hover:text-primary hover:underline">Custom LLM</Link></li>
              <li><Link to="#services" className="hover:text-primary hover:underline">AI Insurance</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>Email: info@aiinnovators.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 AI Street, Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;