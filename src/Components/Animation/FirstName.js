import React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/* ---------------------------------*/
/* fonction pour animation du nom et prenom section home*/
/* -------------------------------- */

function FirstName() {
  const titleRef = useRef();

  let mm = gsap.matchMedia(),
    breakPoint = 800;

  const onLoad = () => {
    gsap
      .timeline({
        onComplete: function () {
          console.log("animation terminée");
        },
      })
      .fromTo(
        ".letter",
        {
          y: -100,
          opacity: 0,
          margin: "0 0.1vw",
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.16,
          duration: 0.6,
          delay: 0.7,
        }
      )
      .fromTo(
        ".firstname-letter",
        {
          x: -100,
          opacity: 0,
         

        },
        {
          x: 0,
          opacity: 1,
          delay: 0.8,
          duration: 0.6,
          stagger: 0.1,
          margin: "0 0.1vw",
          fontWeight: "700",
        }
      )
      .fromTo(
        ".dev-letter1",
        {
          x: 0,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.33,

        }
      )
      .fromTo(
        ".dev-letter2",
        {
          x: 0,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.33,

        }
      )
      .fromTo(
        ".dev-letter3",
        {
          x: 0,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.33,

        }
      )
      .to(".letter", {
        margin: "0 0.5vw",
        delay: 0.5,
        duration: 0.5,
      })
      .to(".subtitle", {
        margin: "1vh 0.5vw",
        delay: 0.8,
        duration: 0.5,

      });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <>

      <div className="home" id="Home">
        <h1 className="title" ref={titleRef}>
          <span className="letter">L</span>
          <span className="letter">E</span>
          <span className="letter">M</span>
          <span className="letter">O</span>
          <span className="letter">I</span>
          <span className="letter">N</span>
          <span className="letter">E</span>
        </h1>
        <h2 className="title-firstname">
          <span className="firstname-letter">C</span>
          <span className="firstname-letter">H</span>
          <span className="firstname-letter">A</span>
          <span className="firstname-letter">R</span>
          <span className="firstname-letter">L</span>
          <span className="firstname-letter">O</span>
          <span className="firstname-letter">T</span>
          <span className="firstname-letter">T</span>
          <span className="firstname-letter">E</span>
        </h2>
        <h2 className="subtitle">
          <span className="dev-letter1">Développeuse</span>{" "}
        </h2>
        <h2 className="subtitle">
          <span className="dev-letter2">Web</span>
        </h2>
        <h2 className="subtitle">
          <span className="dev-letter3">Front-End</span>
        </h2>
      </div>
    </>
  );
}

export default FirstName;
