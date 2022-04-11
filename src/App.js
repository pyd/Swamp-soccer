import {BrowserRouter, Routes, Route} from "react-router-dom";

import {Members} from "./pages/Members.js";
// import {NavBar} from "./components/NavBar.js";
import Home from "./pages/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Members" element={<Members />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

