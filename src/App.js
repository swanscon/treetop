import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './styles/App.css';
import './styles/Nav.css';
import './styles/Component.css'
import Home from './components/Home';
import About from './components/About';
import Quote from './components/Quote';
import Insurance from './components/Insurance';
import Blog from './components/Blog';
import Events from './components/Events';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li><Link to="/" className="dropdown-item nav-links">Home</Link></li>
              <li><Link to="/about" className="dropdown-item nav-links">About</Link></li>
              <li><Link to="/quote" className="dropdown-item nav-links">Request Quote</Link></li>
              <li><Link to="/insurance" className="dropdown-item nav-links">Insurance Solutions</Link></li>
              <li><Link to="/blog" className="dropdown-item nav-links">Blog</Link></li>
              <li><Link to="/events" className="dropdown-item nav-links">Events</Link></li>
              <li><Link to="/contact" className="dropdown-item nav-links">Contact</Link></li>
            </ul>
          </div>
          <h1>Treetop Insurance</h1>
          <button class="btn btn-light" type="button">
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
          </button>
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
