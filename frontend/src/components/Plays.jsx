import { useRef } from "react";
function Plays({ lists }) {
  const useref = useRef([]); // array of refs

  const handleBack = (index) => {
    useref.current[index].scrollBy({ left: -400, behavior: "smooth" });
  };
  const handleFront = (index) => {
    useref.current[index].scrollBy({ left: 400, behavior: "smooth" });
  };
  return (
    <>
      {lists.map((list, index) => (
        <section className="plays_section" key={index}>
          <h3>{list.name}</h3>

          <div className="plays-wrapper">
            <div
              className="plays-lists"
              ref={(e) => (useref.current[index] = e)}
            >
              {list.items.map((item, index) => (
                <div key={index} className="plays-box">
                  <img src={item.img} alt="shows img" />
                </div>
              ))}
            </div>

            <div className="icon-container">
              <div className="back-icon" onClick={() => handleBack(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </div>
              <div className="front-icon" onClick={() => handleFront(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
export default Plays;
