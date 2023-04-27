import React, { useEffect } from 'react'
import "./style.css"
import gsap from 'gsap'

function Header() {
  // useEffect(()=> {
  //   const split = new SplitText("#header-text", {
  //     type: "lines",
  //     lineClass: "lineChildren",
  //   });

  //   const lines = split.lines

  //   gsap.to(lines, {
  //     duration: 1,
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.1,
  //     ease: "power2",
  //   });
  // }, []);

  return (
    <section className="header-container" data-scroll-section>
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Art Objects</h1>
    </section>
  );
}
import "./style.css"

export default Header
