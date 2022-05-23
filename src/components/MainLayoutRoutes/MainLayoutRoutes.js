import Header from "../Header/Header";
import Search from "../Search/Search";
import Results from "../Results/Results";
import History from "../History/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainLayoutRoutes() {
  return (
    <Router>
      <nav>
        <Header />
      </nav>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/results" element={<Results />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default MainLayoutRoutes;
