import Navbar from './component/Navbar';
import Home from './component/Home';
import Goals from './component/Goals';
import Project from './component/Project';
import Contact from './component/Contact';
// import {Link} from 'react-scroll';
import {Routes, Route, BrowserRouter as Routers, Link, Router} from'react-router-dom';

function App() {
    return (
      // <Routers>
        <div>
          <Navbar />
          {/* <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/goals' element={<Goals />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes> */}
          <Home />
          <Goals />
          <Project />
          <Contact />
        </div>
        // </Routers>
    );
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.circle');
  hiddenElements.forEach((el) => observer.observe(el));


export default App;
