import React, { useState } from 'react';

export default function Card(props) {
  const { image, title, } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      className={`card-skill${isHovered ? ' card-hover-active' : ''}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <img src={image} alt={title} />
      <div className="card-content"></div>
      <div className="card-hover">{title}</div>
    </div>
  );
}