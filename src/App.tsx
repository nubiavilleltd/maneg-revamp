import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import About from './pages/AboutPage/About';
import Event from './pages/EventPage/Event';
import EventDetail from './components/EventCard/EventDetail';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import News from './pages/News';
import NewsDetails from './components/news/NewsDetails';
import ScrollToTop from './utils/ScrollToTop';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/event' element={<Event />} />
                    <Route path='/event/:eventId' element={<EventDetail />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/news/:newsID' element={<NewsDetails />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
