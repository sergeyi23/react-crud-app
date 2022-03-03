import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/people");
  }, []);

  return <h1 className="col-5 mx-auto py-5">Home</h1>;
};

export default Home;
