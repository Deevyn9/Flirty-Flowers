import React from 'react'
import "./style.css"
import photos from "../../data" 

function Featured() {
  const [firstUrl, secondUrl] = photos;
  return (
    <section className="featured-section" data-scroll-section>
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstUrl} alt="first Image" data-scroll />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>

        <img src={secondUrl} alt="second image" data-scroll />
      </div>
    </section>
  );
}
import "./style.css"

export default Featured
