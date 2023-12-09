import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js';
import Kontakt from './Kontakt.js';
import Portfolio from './Portfolio.js';
import Cloudd from './Cloudd.js';
import Netzsich from './Netzsich.js';
import Management from './Management.js';
import Security from './Security.js';
import Pentesting from './Pentesting.js';
import Entwicklung from './Entwicklung.js';
import Test from './Test.js';
import Testt from './Testt.js';


function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} />  {/* Set Home as the default route */}
                        <Route path="/home" element={<Home />} />  {/* Added in case users explicitly navigate to /home */}
                        <Route path="/contact" element={<Kontakt />} />
                        <Route path="/Cloudd" element={<Cloudd />} />
                        <Route path="/Portfolio" element={<Portfolio />} />
                        <Route path="/Netzsich" element={<Netzsich />} />
                        <Route path="/Management" element={<Management />} />
                        <Route path="/Security" element={<Security />} />
                        <Route path="/Pentesting" element={<Pentesting />} />
                        <Route path="/Entwicklung" element={<Entwicklung />} />
                        <Route path="/Test" element={<Test/>} />
                        <Route path="/Testt" element={<Testt/>} />
                        
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
