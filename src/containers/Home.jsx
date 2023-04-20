import React, { useEffect, useRef, useState } from 'react'

import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Featured from '../components/Featured/Featured';
import About from '../components/About/About';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
import CustomCursor from '../CustomCursor'

function Home() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(5);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
      };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000)

    return () => {
      window.clearInterval(id.current)
    }
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <>
      <CustomCursor />

      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Flirty flowers</h1>
          <h2>Rio de Janeiro</h2>
        </div>
      ) : (
        <div className="main-container" id="main-container"

        data-scroll-container
        >
          <Navbar />
          <Header />
          <Featured />
          <About />
          <Gallery />
          <Footer />
        </div>
      )}

    </>
  );
}

export default Home
