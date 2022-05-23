import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import MainLayoutRoutes from "./components/MainLayoutRoutes/MainLayoutRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<MainLayoutRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;
