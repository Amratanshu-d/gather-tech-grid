
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-primary"
              >
                <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
                <path d="M15 3v6h6" />
                <path d="M10 16v-6" />
                <path d="M14 13h-4" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">TechEventGrid</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/" className="hidden sm:block text-gray-600 hover:text-gray-900">
              Dashboard
            </Link>
            <Link to="/submit" className="hidden sm:block text-gray-600 hover:text-gray-900">
              Submit Event
            </Link>
            <Button asChild>
              <Link to="/submit" className="block sm:hidden">
                Submit Event
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
