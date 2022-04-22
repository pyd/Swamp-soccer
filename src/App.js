import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Members} from "./pages/Members.js";
import Home from "./pages/Home.js";
import Navigation from "./components/Navigation.js";
import Infos from "./pages/Infos.js";
import Contact from './pages/Contact.js';
import Footer from "./components/Footer.js";
import Histoire from "./pages/Histoire.js";
import Videos from './components/Videos/Videos'


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + '/'}>
      <Navigation />
      <Videos />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="infos" element={<Infos />} />
        <Route path="membres" element={<Members />} />
        <Route path="histoire" element={<Histoire />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

