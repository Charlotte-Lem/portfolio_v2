import React from "react";
import css3 from "../Assets/css.png";
import html from "../Assets/html.png";
import js from "../Assets/js.png";
import mysql from "../Assets/mysql.png";
import nodejs from "../Assets/nodeJs.png";
import reactJs from "../Assets/reactjs.png";
import mongo from "../Assets/mongo.png";
import git from "../Assets/github.png";
import seq from "../Assets/seq.png";
import py from "../Assets/py.png";
import vs from "../Assets/vscode.svg";
//import all from '../Assets/all.png';

export default function skill() {
  return (
    <div className="skill" id="Skills">
      <div className="skill__teck">
        <div className=" skills base">
          <h2>Front</h2>
          <img src={css3} alt="logo css3" />
          <img src={html} alt="logo html" />
          <img src={js} alt="logo js" />
        </div>
        <div className="skills js">
          <h2>Frameworks</h2>
          <img className="reactjs" src={reactJs} alt="logo reactjs" />
          <img className="node" src={nodejs} alt="logo nodejs" />
        </div>
        <div className=" skills bd">
          <h2>Bases de Données</h2>
          <img className="mysql" src={mysql} alt="logo mysql" />
          <img className="mongo" src={mongo} alt="logo mongodb" />
          <img className="seq" src={seq} alt="logologo sequelize" />
        </div>
        <div className="skills divers">
          <h2>Divers</h2>
          <img className="git" src={git} alt="logo git" />
          <img className="vscode" src={vs} alt="logo vscode" />
          <img className="pycharm" src={py} alt="logo py charm" />
        </div>
      </div>
      <div className="skill__soft">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, itaque
          laborum est voluptatem ipsa beatae eos sunt id suscipit, et qui
          aliquam facilis architecto quasi corporis officiis veniam
          voluptatibus. Deleniti!
        </p>
      </div>
    </div>
  );
}
