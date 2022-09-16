import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Layout/home';
import Contact from './Layout/contact';
import Skills from './Layout/skill';
import Project from './Layout/project';
import NotFound from './Layout/notFound';
import Navigation from './Components/nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />{' '}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/competences" element={<Skills />} />
          <Route exact path="/projet" element={<Project />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
