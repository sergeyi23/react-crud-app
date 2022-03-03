import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/Navbar";
import PeoplePage from "./components/PeoplePage";
import PlanetsPage from "./components/PlanetsPage";
import StarshipsPage from "./components/StarshipsPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";

const AppRouter = () => {
  return (
    <Router>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/planets" element={<PlanetsPage />} />
        <Route path="/starships" element={<StarshipsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
