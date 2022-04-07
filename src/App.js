// import {BrowserRouter, Routes, Route} from "react-router-dom";



// import {NavBar} from "./components/NavBar.js";

// import {Home} from "./Home.js";
// import {Blog} from "./Blog.js";
// import {Contact} from "./Contact.js";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

//  export default App;

import Home from "./pages/Home.jsx";
import {Members} from "./pages/Members.js";

 function App() {
   return (
    <Home />
   );
 }

 export default App;
