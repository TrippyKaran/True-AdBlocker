import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUS from "./pages/AboutUs";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./myComponent/PrivacyPolicy";
import Disclaimer from "./myComponent/Disclaimer";
import TermsAndCondition from "./myComponent/TermsAndCondition";

function Rout() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUS />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      </Routes>
    </div>
  );
}

export default Rout;
