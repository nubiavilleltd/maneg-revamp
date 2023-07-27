import {Routes, Route, useLocation} from 'react-router-dom';
// pages
import TransitionHome from './pages/Home/Home';
import TransitionAbout from './pages/AboutPage/About';
import TransitionEvent from './pages/EventPage/Event';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import TransitionNews from './pages/News';
import TransitionNewsDetails from './components/news/NewsDetails';
import ScrollToTop from './utils/ScrollToTop';
import TransitionContact from './pages/ContactPage/Contact';
import TransitionMemberDirectory from './pages/MemberDirectory/MemberDirectory';
import TransitionEventDetail from './components/EventCard/EventDetail';
import TransitionProducts from './pages/Products/products';
import Preloader from './pages/Preloader/Preloader';
import TransitionMemberBenefits from './pages/MemberBenefits/MemberBenefits';
import TransitionMemberProfile from './pages/MemberProfile/MemberProfile';
import {useState, useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';

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
                    <AnimatePresence mode='wait'>
                        <Routes location={location} key={location.pathname}>
                            <Route path='/' element={<TransitionHome />} />
                            <Route
                                path='/about'
                                element={<TransitionAbout />}
                            />
                            <Route
                                path='/directory'
                                element={<TransitionMemberDirectory />}
                            />
                            <Route
                                path='/directory/:memberID'
                                element={<TransitionMemberProfile />}
                            />
                            <Route
                                path='/event'
                                element={<TransitionEvent />}
                            />
                            <Route path='/news' element={<TransitionNews />} />
                            <Route
                                path='/news/:newsID'
                                element={<TransitionNewsDetails />}
                            />
                            <Route
                                path='/event/:eventId'
                                element={<TransitionEventDetail />}
                            />
                            <Route
                                path='/products'
                                element={<TransitionProducts />}
                            />
                            <Route
                                path='/contact'
                                element={<TransitionContact />}
                            />
                            <Route
                                path='/benefits'
                                element={<TransitionMemberBenefits />}
                            />
                        </Routes>
                    </AnimatePresence>
                    <Footer />
                </div>
            )}
        </>
    );
}

export default App;
