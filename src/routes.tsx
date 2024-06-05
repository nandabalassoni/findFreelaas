import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Freelas } from "./pages/Freelas";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelas" element={<Freelas />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;