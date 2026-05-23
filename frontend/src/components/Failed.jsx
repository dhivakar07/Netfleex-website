import { useNavigate } from "react-router-dom";
function Failed() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <section className="failed_section">
      <div className="failed_error-box">
        <h1>Login Failed..</h1>
        <p>
          😞Sorry, we couldn't find an account with those details. Please check
          your email and password.
        </p>
        <button className="failed-btn" onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
            />
          </svg>
          Login Page
        </button>
      </div>
    </section>
  );
}
export default Failed;
