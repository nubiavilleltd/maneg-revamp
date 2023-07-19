import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/event' element={<Event />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
