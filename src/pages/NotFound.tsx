
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Log additional information for debugging
    console.log("Current URL:", window.location.href);
    console.log("Hostname:", window.location.hostname);
    console.log("Origin:", window.location.origin);
    console.log("React Router pathname:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center max-w-lg px-6">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">
          Oops! Page not found: {location.pathname}
        </p>
        <p className="text-md text-gray-500 mb-6">
          The URL you are trying to access does not exist.
        </p>
        <div className="mb-6 p-4 bg-gray-200 rounded-md text-left">
          <p className="text-sm text-gray-700 font-mono">
            Debug info:
            <br />
            Full URL: {window.location.href}
            <br />
            Hostname: {window.location.hostname}
            <br />
            Origin: {window.location.origin}
          </p>
        </div>
        <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
