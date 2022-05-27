import Search from "../Search/Search";
import Results from "../Results/Results";
import History from "../History/History";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function MainLayoutRoutes() {
  const [countryData, setCountryData] = useState([]);

  function changeCountryData(data) {
    setCountryData(data);
  }

  return (
    <div className="h-full">
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/search" element={<Search changeCountryData={changeCountryData} />} />
        <Route path="/results" element={<Results countryData={countryData} />} />
        <Route path="/history" element={<History changeCountryData={changeCountryData} />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayoutRoutes;
