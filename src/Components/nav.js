// import React from "react";
// import { NavLink } from "react-router-dom";
// export default function Navigation() {
//   return (
//     <div className="sidebar">
//       <div className="navigation">
//         <ul>
//           <li>
//             <button className="btn-nav">
//               <NavLink
//                 exact="true"
//                 to="/accueil"
//                 className={({ isActive }) =>
//                   isActive ? "link-active" : "link"
//                 }
//               >
//                 <span>A propos de moi</span>
//               </NavLink>
//             </button>
//           </li>

//           <li>
//             <button className="btn-nav">
//               <NavLink
//                 exact="true"
//                 to="/competences"
//                 className={({ isActive }) =>
//                   isActive ? "link-active" : "link"
//                 }
//               >
//                 <span>Compétences</span>
//               </NavLink>
//             </button>
//           </li>
//           <li>
//             <button className="btn-nav">
//               <NavLink
//                 exact="true"
//                 to="/projet"
//                 className={({ isActive }) =>
//                   isActive ? "link-active" : "link"
//                 }
//               >
//                 <span>Projets</span>
//               </NavLink>
//             </button>
//           </li>
//           <li>
//             <button className="btn-nav">
//               <NavLink
//                 exact="true"
//                 to="/contact"
//                 className={({ isActive }) =>
//                   isActive ? "link-active" : "link"
//                 }
//               >
//                 <span>Contact</span>
//               </NavLink>
//             </button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

// import { images } from "../../constants";

// import "./Navbar.scss";

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
      {/* <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div> */}
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
            whileInView={{ x: [300, 0] }}
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
