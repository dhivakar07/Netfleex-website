import childimg from "../assets/profile-child.jpg";
import profileimg from "../assets/profile-img.jpg";
import addprofile from "../assets/add-profile.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate();
  const [profileList, setprofileList] = useState([
    {
      img: profileimg,
      name: "Dhivakar",
    },
    {
      img: childimg,
      name: "Childern",
    },
  ]);
  const handleNavigate = (item) => {
    navigate("/home", { state: { profile: item } });
  };
  const handleAddProfile = () => {};
  return (
    <section className="profile_section">
      <h1>Who's watching?</h1>
      <div className="profile_container">
        {profileList.map((item, index) => {
          return (
            <div
              key={index}
              className="profile_list-box"
              onClick={() => handleNavigate(item)}
            >
              <img src={item.img} alt="Profile img" />
              <p>{item.name}</p>
            </div>
          );
        })}
        <div className="profile_list-box" onClick={handleAddProfile}>
          <img src={addprofile} alt="Profile img" />
          <p>Add Profile</p>
        </div>
      </div>
    </section>
  );
}
export default Profile;
