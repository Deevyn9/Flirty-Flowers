import React from 'react'

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Featured from '../components/Featured/Featured';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
// import CustomCursor from '../CustomCursor'

function Home() {
  return (
    <>
      {/* <CustomCursor /> */}

      <div className="main-container" id="main-container">
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        <Footer />
      </div>
    </>
  );
}

export default Home