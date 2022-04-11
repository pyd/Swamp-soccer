import {BrowserRouter, Routes, Route} from "react-router-dom";

import {NavBar} from "./components/NavBar.js";
import Home from "./pages/Home.js";
import {Members} from "./pages/Members.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

