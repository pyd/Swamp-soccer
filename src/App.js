import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Members} from "./pages/Members.js";
// import {NavBar} from "./components/NavBar.js";
import Home from "./pages/Home.js";
import Navigation from "./components/Navigation.js";
import Infos from "./pages/Infos.js";
import Footer from "./components/Footer.js";
import Histoire from "./pages/Histoire.js";


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Infos" element={<Infos />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/Histoire" element={<Histoire/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

