import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import PageNotFound from "./Components/PageNotFound";

function App() {
  const navigator = useNavigate();

  const navigateTo = (url) => {
    navigator(url);
  };

  const navigateToWhere = () => {
    const name = "rohan";
    if (name == "rohan") {
      navigateTo("/about");
    } else {
      navigateTo("/");
    }
  };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {/*  How to add button click rediraction  */}

      {/*  Normal  navigator */}
      <button type="button" onClick={() => navigator("/about")}>
        About Us
      </button>
      <br></br>
      <button type="button" onClick={() => navigator("/contact")}>
        Contact
      </button>
      <br></br>
      <br></br>

      {/*  */}

      <button onClick={() => navigateTo("/")}>Home</button>
      <button onClick={() => navigateTo("/about")}>About</button>
      <button onClick={() => navigateTo("/contact")}>Contact</button>

      <button onClick={() => navigateToWhere()}>Click I ma Rohan??</button>
    </>
  );
}

export default App;
