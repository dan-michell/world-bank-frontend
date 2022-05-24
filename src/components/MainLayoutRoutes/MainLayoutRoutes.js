import Search from "../Search/Search2";
import Results from "../Results/Results";
import History from "../History/History";
import Header from "../Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainLayoutRoutes() {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}

export default MainLayoutRoutes;
