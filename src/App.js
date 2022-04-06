import {BrowserRouter, Routes, Route} from "react-router-dom";
import {PlayerCard} from "./components/PlayerCard.js";

import {NavBar} from "./components/NavBar.js";

import {Home} from "./Home.js";
import {Blog} from "./Blog.js";
import {Contact} from "./Contact.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="PlayerCard" element={<PlayerCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
