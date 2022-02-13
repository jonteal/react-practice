import React, { useState } from "react";
<<<<<<< HEAD
import Home from "./Home/Home";
=======
import Intro from "./Intro/Intro";
>>>>>>> origin/main
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Photography from "./Photography/Photography";
import VisualDesign from "./VisualDesign/VisualDesign";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";


export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Photography') {
            return <Photography />;
        }
        if (currentPage === 'Visual Design') {
            return <VisualDesign />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer/>
        </div>
    )
}