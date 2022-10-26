import React from "react";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="sidebar">
      <div className="navigation">
        <ul>
          <li>
            <button className="btn-nav">
              <NavLink
                exact="true"
                to="/accueil"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <span>A propos de moi</span>
              </NavLink>
            </button>
          </li>

          <li>
            <button className="btn-nav">
              <NavLink
                exact="true"
                to="/competences"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <span>Compétences</span>
              </NavLink>
            </button>
          </li>
          <li>
            <button className="btn-nav">
              <NavLink
                exact="true"
                to="/projet"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <span>Projets</span>
              </NavLink>
            </button>
          </li>
          <li>
            <button className="btn-nav">
              <NavLink
                exact="true"
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "link-active" : "link"
                }
              >
                <span>Contact</span>
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
