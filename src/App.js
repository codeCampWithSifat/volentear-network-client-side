import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import RequiredAuth from "./Components/Login/RequiredAuth/RequiredAuth";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/contact"
          element={
            <RequiredAuth>
              <Contact />
            </RequiredAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
