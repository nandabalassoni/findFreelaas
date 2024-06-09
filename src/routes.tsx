import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Freelas } from "./pages/Freelas";
import { Maria } from "./pages/Freelas/maria";
import { Vinicius } from "./pages/Freelas/vinicius";
import { Bruno } from "./pages/Freelas/bruno";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelas" element={<Freelas />} />
        <Route path="/maria" element={<Maria />} />
        <Route path="/vinicius" element={<Vinicius />} />
        <Route path="/bruno" element={<Bruno />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;