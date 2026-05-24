import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
import PlayList from "./PlayList";
import { useState, useEffect } from "react";
function Home() {
  const location = useLocation();
  const { profile } = location.state || {};

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <section className="home_section">
        <header className={`home_navbar ${scrolled ? "scrolled" : ""}`}>
          <Navbar profile={profile} />
        </header>
        <HeroBanner />
        <PlayList />
      </section>
    </>
  );
}

export default Home;
