// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Layout/home";
import Contact from "./Layout/contact";
import Skills from "./Layout/skill";
// import Card from "./Components/card.js";
import Project from "./Layout/project";
// import NotFound from './Layout/notFound';
import Navigation from "./Components/nav";
const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Home />
      <Skills />
      {/* <Card /> */}
      <Project />
      <Contact />
    </div>
  );
};

export default App;
