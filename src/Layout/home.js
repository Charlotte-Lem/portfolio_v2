import React from 'react';

export default function home() {
  return (
    <>
      <div className="home">
        <div className="css-typing">
          <p> Charlotte Lemoine</p>
          <p>Développeuse Web </p>{' '}
          <a
            className="cv
          "
            href="./CV_LEMOINE_CHARLOTTE.pdf"
          >
        Mon CV (pdf)
          </a>
        </div>
      </div>

      <div className="home__overlay"></div>
    </>
  );
}
