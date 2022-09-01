import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Navbar from "./utils/Navbar/Header";
import Footer from "./utils/Footer/footer"
import { useLayoutEffect } from "react";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <div className="font-sans">
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </Wrapper>
    </div>
  );
}

export default App;
