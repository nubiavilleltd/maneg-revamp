import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import Home from './pages/Home/Home';
import About from './pages/AboutPage/About';
import Event from './pages/EventPage/Event';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <>
            <BrowserRouter>
                {/* <Navbar /> */}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/event' element={<Event />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
