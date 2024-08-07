import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Treatment from "./Pages/Treatment/Treatment";
import Accommodation from "./Pages/Accommodation/Accommodation";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/treatment" element={<Treatment />}></Route>
          <Route path="/accommodation" element={<Accommodation />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
