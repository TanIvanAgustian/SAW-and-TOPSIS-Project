import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { LoadingWithLogo } from "../components/Loading";
import { useEffect, useState } from "react";

export default function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to true initially
    setLoading(true);

    // After 3 seconds, set loading to false
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to ensure the effect runs only once

  return loading ? (
    <LoadingWithLogo />
  ) : (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
