import Navigation from "./Components/Navigation/Navigation";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import DesignsPage from "./Components/DesignsPage/DesignsPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/contact";
import Login from "./Components/Login/login";



const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DesignsPage" element={<DesignsPage />} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Login/>}/>

      </Routes>

      <Footer />
    </div>
  );
};

export default App;
