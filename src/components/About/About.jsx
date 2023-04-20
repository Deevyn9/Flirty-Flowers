import React from 'react'
import SectionHeader from '../SectionHeader'
import "./style.css"

function About() {
  return (
    <section className={`about-section`}>
      <SectionHeader title='about'

        data-scroll-section
      />
      <p id="headline">
        Flirty Flowers is a blog about flowers and the floral designers who make them into art. Creativity and the art of 'making' require dialogue. The full purpose of the Flirty Flowers blog is to encourage and inspire. We value art, we value insight, and we value opinion. 
      </p>
    </section>
  )
}
import "./style.css"

export default About
