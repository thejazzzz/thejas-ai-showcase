
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl md:text-8xl font-bold text-tech-blue mb-6">404</h1>
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-lg text-foreground/70 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/">
        <Button size="lg">Return Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
