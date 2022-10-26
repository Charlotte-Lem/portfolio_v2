import React from "react";
import p2 from "../Assets/logo/p2/Booki.png";
import p3 from "../Assets/logo/p3/ohmyfood@2x.svg";
import p5 from "../Assets/logo/p5/kanap-logo.png";
import p7 from "../Assets/logo/p7/groupomania-logo.svg";
export default function project() {
  return (
    <>
      <div className="container__project">
        {/* card des projets en cour et réalisés */}
        <div className="content">
          <div className="title">
            <h2>Projets réalisés</h2>{" "}
          </div>
          <div className="project">
            <div className="project__card">
              <a href="/#">
                <div className="project__content">
                  <img
                    className="project__content logo booki"
                    src={p2}
                    alt="booki"
                  />
                  <p>Site simple pour une agence de voyage. HTML, CSS</p>
                </div>
              </a>
            </div>
            <div className="project__card">
              <a href="https://charlotte-lem.github.io/CharlotteLemoine_3_05112021/">
                <div className="project__content">
                  <img
                    className="project__content logo ohmyfood"
                    src={p3}
                    alt="logo ohmyfood"
                  />
                  <p>
                    Site pour application de restaurants et de plats. HTML, CSS,
                    SASS
                  </p>
                </div>
              </a>
            </div>
            <div className="project__card">
              <a href="/#">
                <div className="project__content">
                  <img
                    className="project__content  logo"
                    src={p5}
                    alt="logo kanap"
                  />
                  <p>Site e-commerce pour des canapés. JavaScript.</p>
                </div>
              </a>
            </div>
            <div className="project__card">
              <a href="/#">
                <div className="project__content">
                  <img
                    className="project__content  logo"
                    src={p7}
                    alt=" Logo Groupomania "
                  />
                </div>
                <p>
                  Réseau Social d'Entreprise. MySql, Sequelize, Express,
                  ReactJs, Sass
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay__project"></div>
    </>
  );
}
