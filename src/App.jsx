/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import SectionInicio from './components/SectionInicio';
import SectionClinica from './components/SectionClinica';
import SectionSobre from './components/SectionSobre';
import SectionDuvidas from './components/SectionDuvidas';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <SectionInicio />
                <SectionClinica />
                <SectionSobre />
                <SectionDuvidas />
                <Footer />
            </div>
        </Router>
    );
};

export default App;