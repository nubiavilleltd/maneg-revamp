import { Routes, Route, useLocation } from "react-router-dom";
// pages
import Home from "./pages/Home/Home";
import About from "./pages/AboutPage/About";
import Event from "./pages/EventPage/Event";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import News from "./pages/News";
import NewsDetails from "./components/news/NewsDetails";
import ScrollToTop from "./utils/ScrollToTop";
import Contact from "./pages/ContactPage/Contact";
import MemberDirectory from "./pages/MemberDirectory/MemberDirectory";
import EventDetail from "./components/EventCard/EventDetail";
import Products from "./pages/Products/products";
import Preloader from "./pages/Preloader/Preloader";
import TransitionMemberBenefits from "./pages/MemberBenefits/MemberBenefits";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const location = useLocation();

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/directory" element={<MemberDirectory />} />
            <Route path="/event" element={<Event />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:newsID" element={<NewsDetails />} />
            <Route path="/event/:eventId" element={<EventDetail />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/benefits" element={<TransitionMemberBenefits />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
