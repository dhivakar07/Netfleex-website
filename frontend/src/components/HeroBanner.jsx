import heroimg from "../assets/hero-img1.jpg";
import herologo from "../assets/hero-logo.png";
function HeroBanner() {
  return (
    <>
      <section className="hero_section">
        <img src={heroimg} alt="" />
        <div className="hero_section-heading">
          <img src={herologo} alt="" />
          <p>
            A chemistry teacher diagnosed with inoperable lung cancer turns to
            manufacturing and selling methamphetamine with a former student to
            secure his family's future.
          </p>
          <div className="hero_section-btn">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="play-icon size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              Play
            </button>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="i-icon size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              More Info
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroBanner;
