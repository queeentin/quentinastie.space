import { Footer } from "../components/Footer.jsx";
import { Icon } from "../components/Icon.jsx";
import { Header } from "../components/Header.jsx";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function Home() {

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;

    if (path != "/") {
      document.body.style.overflow = "hidden";
      document.getElementById("root").style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.getElementById("root").style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location]);

  return (
    <div id="home">
      <Icon />
      <Header />
      <Footer />
    </div>
  );
}