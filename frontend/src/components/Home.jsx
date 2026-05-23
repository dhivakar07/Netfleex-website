import HeroBanner from "./HeroBanner";
import InternationalShows from "./InternationalShows";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";
function Home() {
  const location = useLocation();
  const { profile } = location.state || {};

  return (
    <>
      <section className="home_section">
        <header className="home_navbar">
          <Navbar profile={profile} />
        </header>
        <HeroBanner />
        <InternationalShows />
      </section>
    </>
  );
}

export default Home;
