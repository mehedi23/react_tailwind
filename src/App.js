import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Services from './components/Services';
import LatestBlog from './components/LatestBlog';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
            <Header/>
            <Banner/>
            <About/>
            <Services/>
            <LatestBlog/>
            <Footer/>
        </>
    )
}

export default App
