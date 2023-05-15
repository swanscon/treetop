import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import './styles/App.css';
import './styles/Nav.css';
import './styles/Component.css'
import './styles/Images.css'
import Home from './components/Home';
import About from './components/About';
import Quote from './components/Quote';
import Insurance from './components/Insurance';
import Blog from './components/Blog';
import Events from './components/Events';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Logo from './assets/images/tree-top-insurance.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="header-logo"/>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="header-nav">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-links">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about" className="nav-links">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/quote" className="nav-links">Request Quote</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/insurance" className="nav-links">Insurance Solutions</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/blog" className="nav-links">Blog</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/events" className="nav-links">Events</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/contact" className="nav-links">Contact</NavLink>
                  </li>
                </ul>
                {/* <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon></button>
                </form> */}
              </div>
            </div>
          </nav>
        </header>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} /> 
        <Route path="/quote" element={<Quote/>} />
        <Route path="/insurance" element={<Insurance/>} /> 
        <Route path="/blog" element={<Blog/>} />
        <Route path="/events" element={<Events/>} />
        <Route path="/contact" element={<Contact/>} />     
      </Routes>
    </Router>
  );
}

export default App;
