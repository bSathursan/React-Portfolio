import React from 'react'
import './intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

let isLoading = true;

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {

    if (textRef.current && isLoading) {
      isLoading = false;

      init(textRef.current, {
        showCursor: true,
        backDelay:1500,
        backSpeed: 30,
        strings: ["Internship"],
      });
    }
  }, []);

  return (
    <div className='intro' id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src="assets/sathu.jpg" alt='' />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Balaputhiran Sathursan</h1>
          <h3>Software Engineer - <span ref={textRef}></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png' alt='' />
        </a>
      </div>
    </div>
  )
}
