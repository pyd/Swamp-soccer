import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Members} from "./pages/Members.js";

import {NavBar} from "./components/NavBar.js";

import {Home} from "./pages/Home.js";
import {Blog} from "./pages/Blog.js";
import {Contact} from "./pages/Contact.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
