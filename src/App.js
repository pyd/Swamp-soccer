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
<<<<<<< HEAD
        <Route path="/Histoire" element={<Histoire />} />
=======
        <Route path="/histoire" element={<Histoire />} />
>>>>>>> 50e5653c1d543aeb48c3cf200685e6efb0123e5e
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

