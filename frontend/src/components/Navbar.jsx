import logo from "../assets/netfleex-logo.png";
function Navbar({ profile }) {
  return (
    <>
      <section className="navbar_section">
        <div className="navbar_section-one">
          <img src={logo} alt="logo-img" />
          <ul className="navbar_category-list">
            <li>Home</li>
            <li>Shows</li>
            <li>Movie</li>
            <li>Games</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browser by languages</li>
          </ul>
        </div>
        <div className="navbar_section-two">
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
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <p>Children</p>
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
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
          {profile?.img && (
            <img
              src={profile.img}
              alt={`${profile.name} avatar`}
              className="navbar_profile-img"
            />
          )}
        </div>
      </section>
    </>
  );
}
export default Navbar;
