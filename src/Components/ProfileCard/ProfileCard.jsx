import React from "react";
import "./ProfileCard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
          </div>
          <div className="ProfilName">
              <span>Zendaya MJ</span>
              <span>Senior</span>
          </div>
    </div>
  );
};

export default ProfileCard;
