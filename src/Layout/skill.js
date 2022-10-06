import React from 'react';
import css3 from '../Assets/css.png';
import html from '../Assets/html.png';
import js from '../Assets/js.png';
import mysql from '../Assets/mysql.png';
import nodejs from '../Assets/nodeJs.png';
import reactJs from '../Assets/reactjs.png';
import mongo from '../Assets/mongo.png';
import git from '../Assets/github.png';
import seq from '../Assets/seq.png';
import all from '../Assets/all.png';

export default function skill() {
  return (
    <div className="skill">
      {/* <div className="skill-img">
        <img src={all} alt="" />
      </div> */}
      <div className="skill__teck">
        <div className="base">
          <img src={css3} alt="" />
          <img src={html} alt="" />
          <img src={js} alt="" />
        </div>
        <div className="js">
          <img className="reactjs" src={reactJs} alt="" />
          <img className="node" src={nodejs} alt="" />
        </div>
        <div className="bd">
          <img className="mysql" src={mysql} alt="" />
          <img className="mongo" src={mongo} alt="" />
          <img className="seq" src={seq} alt="" />
        </div>
        <div className="divers">
          <img className="git" src={git} alt="" /> 
          <img src="" alt="vscode" />
          <img src="" alt="pycharm" />
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
