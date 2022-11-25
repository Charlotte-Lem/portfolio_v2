
import React, { useState, useEffect } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const [classFloat, setClassFloat] = useState("");
  const [active, setActive] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavBar);

    return () => {
      window.removeEventListener("scroll", stickNavBar);
    };
  }, []);

  const stickNavBar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 250) {
        setClassFloat("navbar-float");
      } else {
        setClassFloat("");
      }
    }
  };

  return (
    <div className={`app__navbar ${classFloat}`}>
      <ul className="app__navbar-links">
        {["Home", "Skills", "Project", "Contact"].map((item) => (
          <li
            key={`link-${item}`}
            className={`btn-nav ${active === item ? "active" : ""}`}
          >
            <a href={`#${item}`} onClick={() => setActive(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <div
          whileinview={{ x: [300, 0] }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["Home", "Skills", "Project", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
