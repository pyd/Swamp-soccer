import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Members} from "./pages/Members.js";
import Home from "./pages/Home.js";
import Navigation from "./components/Navigation.js";
import Infos from "./pages/Infos.js";
import Contact from './pages/Contact.js';
import Footer from "./components/Footer.js";
import Histoire from "./pages/Histoire.js";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/infos" element={<Infos />} />
        <Route path="/members" element={<Members />} />
        <Route path="/histoire" element={<Histoire />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

