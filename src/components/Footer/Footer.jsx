import React from 'react'
import "./style.css"
import SectionHeader from "../SectionHeader"

function Footer() {
  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Made in" />
      <h1 className="location" id="location-text">
        Rio di Janeiro
      </h1>
    </section>
  );
}
import "./style.css"

export default Footer
