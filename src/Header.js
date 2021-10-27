import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/home">Home</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/details">Details</Link>
    </div>
  );
};

export default Home;
