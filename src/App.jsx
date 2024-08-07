import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Treatment from "./Pages/Treatment/Treatment";
import Accommodation from "./Pages/Accommodation/Accommodation";
import Programs from "./Pages/Programs/Programs";
import NotFoundPage from "./Pages/404NotFound/NotFoundPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/treatment" element={<Treatment />}></Route>
          <Route path="/accommodation" element={<Accommodation />}></Route>
          <Route path="/programs" element={<Programs />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
