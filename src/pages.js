import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavMenu from "./components/Navbar";
import PeoplePage from "./components/People/PeoplePage";
import PlanetsPage from "./components/PlanetsPage";
import StarshipsPage from "./components/StarshipsPage";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import CreatePersonForm from "./components/People/CreatePersonForm";
import EditPersonForm from "./components/People/EditPersonForm";
import { PeopleProvider } from "./components/contexts/PeopleContext";

const AppRouter = () => {
  return (
    <PeopleProvider>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/people/new" element={<CreatePersonForm />} />
          <Route exact path="/people/:id/edit" element={<EditPersonForm />} />
          <Route path="/planets" element={<PlanetsPage />} />
          <Route path="/starships" element={<StarshipsPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </PeopleProvider>
  );
};

export default AppRouter;
