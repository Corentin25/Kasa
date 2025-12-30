import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Logement } from "./pages/Logement/Logement";
import { Error404 } from "./pages/Error404/Error404";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import "./main.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:idLogement" element={<Logement />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);