import React from "react";
import Card from "../Components/Card.js";
import css3 from "../Assets/css.png";
import html from "../Assets/html.png";
import js from "../Assets/js.png";
import mysql from "../Assets/mysql.png";
import nodejs from "../Assets/nodeJs.png";
import reactJs from "../Assets/reactjs.png";
import mongo from "../Assets/mongo.png";
import git from "../Assets/github.png";
import seq from "../Assets/sequelize.svg";
import sass from "../Assets/sass.svg";
// import py from "../Assets/py.png";
// import vs from "../Assets/vscode.svg";
const cardData = [
  {
    id: 1,
    title: "HTML",
    description: "Apprentissage ",
    image: html,
  },
  {
    id: 2,
    title: "CSS",
    description: "Apprentissage CSS",
    image: css3,
  },
  {
    id: 3,
    title: "SASS",
    description: "Apprentissage SASS",
    image: sass,
  },
  {
    id: 4,
    title: "JAVASCRIPT",
    description: "Apprentissage JAVASCRIPT",
    image: js,
  },
  {
    id: 5,
    title: "MYSQL",
    description: "Apprentissage MYSQL",
    image: mysql,
  },
  {
    id: 6,
    title: "NODEJS",
    description: "Apprentissage NODEJS",
    image: nodejs,
  },
  {
    id: 7,
    title: "REACTJS",
    description: "Apprentissage REACTJS",
    image: reactJs,
  },
  {
    id: 8,
    title: "MONGODB",
    description: "Apprentissage MONGODB",
    image: mongo,
  },
  {
    id: 9,
    title: "SEQUELIZE",
    description: "Apprentissage SEQUELIZE",
    image: seq,
  },
  {
    id: 10,
    title: "GIT",
    description: "Apprentissage GIT",
    image: git,
  },
  

];
export default function skill() {
  return (
    <div className="skill" id="Skills">
      {/* Start hard and soft skills */}

      <div className="container-card ">
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} description={card.description} image={card.image} />
        ))}
      </div>
      {/* End soft skills */}
    </div>
  );
}
