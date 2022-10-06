import React from 'react';
import p1 from '../Assets/p1.png';
import p3 from '../Assets/p3.png';
import np from '../Assets/np.jpg';
export default function project() {
  return (
    <>
      <div className="container__project">
        {/* card des projets en cour et réalisés */}
        <div className="content">
          <div className="title">
            <h2> Projet en cours </h2>
          </div>
          <div className="project __inc">
            <div className="project__card">
              {' '}
              <h3>Nouvelle peau</h3>
              <div className="project__content">
                <img
                  src={np}
                  alt="Nouvelle peau
                "
                />
              </div>
              <p>
                Site vitrine pour salon de tatouage. HTML, CSS, Sass , ReactJs
              </p>
            </div>
          </div>
          <div className="title">
            <h2>Quelques projets réalisés</h2>{' '}
          </div>
          <div className="project">
            <div className="project__card">
              {' '}
              <h3>Oh My Food</h3>
              <div className="project__content">
                <img src={p3} alt="ohmyfood" />
              </div>
              <a href="">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </a>
            </div>
            <div className="project__card">
              {' '}
              <h3>Kanap</h3>
              <div className="project__content">
                <img src={p1} alt="Booki" />
              </div>
              <a href="">
                {' '}
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </a>
            </div>
            <div className="project__card">
              {' '}
              <h3>Groupomania</h3>
              <div className="project__content">
                <img src={p1} alt="Booki" />
              </div>
              <a href="">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </a>
            </div>
          </div>{' '}
        </div>
      </div>{' '}
      <div className="overlay__project"></div>
    </>
  );
}
