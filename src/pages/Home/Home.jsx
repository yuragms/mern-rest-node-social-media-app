import React from "react";
import "./Home.css";
import ProfileSide from "../../Components/ProfileSide/ProfileSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <div className="postSide">Posts</div>
      <div className="rightSide">Rightside</div>
    </div>
  );
};

export default Home;
