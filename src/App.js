import React from "react";
import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/pages/contact_us/Contact";
import Teams from "./components/pages/teams/Teams";
import Rankings from "./components/pages/rankings/Rankings";
import { Routes, Route } from "react-router-dom";
import India from "./components/pages/teams/Ind";
import Australia from "./components/pages/teams/Aus";
import England from "./components/pages/teams/Eng";
import SouthAfrica from "./components/pages/teams/Rsa";
import Pakistan from "./components/pages/teams/Pak";
import NotFound from "./components/pages/error_page/NotFound";
import Tests from "./components/pages/rankings/Tests";
import ODIs from "./components/pages/rankings/Odi";
import Twenty20 from "./components/pages/rankings/T-20";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path="ind" element={<India />} />
          <Route path="aus" element={<Australia />} />
          <Route path="eng" element={<England />} />
          <Route path="pak" element={<Pakistan />} />
          <Route path="rsa" element={<SouthAfrica />} />
        </Route>
        <Route path="rankings" element={<Rankings />}>
          <Route path="tests" element={<Tests />} />
          <Route path="odis" element={<ODIs />} />
          <Route path="twenty20" element={<Twenty20 />} />
        </Route>
        <Route path="about" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
