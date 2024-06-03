import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Freelas } from "./pages/Freelas"; // Importe o componente Freelas

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/freelas" element={<Freelas />} /> {/* Defina a rota para o componente Freelas */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;