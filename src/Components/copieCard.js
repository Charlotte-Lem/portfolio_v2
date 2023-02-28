// import React, { useEffect, useState, useRef } from "react";

// import { gsap } from "gsap";

// function Card() {
//   const [toggle, setToggle] = useState(false);

//   const changeState = () => {
//     setToggle(!toggle);
//   };

//   const cardRef = useRef(null);

//   useEffect(() => {
//     gsap.to(cardRef.current, {
//       scale:1.5,
//       rotate: 0,
//       duration: 1.5,
//     });
//   }, []);

//   return (
//     <div className="card" onClick={changeState} ref={cardRef}>
//       Hello Card
//     </div>
//   );
// }

// export default Card;
