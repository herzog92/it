import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.js';
import Footer from './Footer.js';
import About from './About.js';
import Home from './Home.js';
import Kontakt from './Kontakt.js';
import Portfolio from './Portfolio.js';
import Services from './Services.js';
import Management from './Management.js';


function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />  {/* Set Home as the default route */}
                        <Route path="/home" element={<Home />} />  {/* Added in case users explicitly navigate to /home */}
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Kontakt />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/management" element={<Management />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                        
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
