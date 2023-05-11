import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './styles/App.css';
import './styles/Nav.css';
import Home from './components/Home';
import About from './components/About';
import Quote from './components/Quote';
import Insurance from './components/Insurance';
import Blog from './components/Blog';
import Events from './components/Events';
import Contact from './components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Treetop Insurance</h1>
          {/* <nav className="navbar">
            <button className="navbar-toggler" type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarToggle">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse" id="navbarToggle">
              <Link to="/" className="dropdown-item">Home</Link>
              <Link to="/about" className="dropdown-item">About</Link>
              <Link to="/quote" className="dropdown-item">Request Quote</Link>
              <Link to="/insurance" className="dropdown-item">Insurance Solutions</Link>
              <Link to="/blog" className="dropdown-item">Blog</Link>
              <Link to="/events" className="dropdown-item">Events</Link>
              <Link to="/contact" className="dropdown-item">Contact</Link>
            </div>          
          </nav> */}
                <nav class="navbar navbar-expand-md Nav-links">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                  <div class="collapse navbar-collapse" id="navbarToggler">

                  <Link to="/" className="dropdown-item">Home</Link>
                  <Link to="/about" className="dropdown-item">About</Link>
                  <Link to="/quote" className="dropdown-item">Request Quote</Link>
                  <Link to="/insurance" className="dropdown-item">Insurance Solutions</Link>
                  <Link to="/blog" className="dropdown-item">Blog</Link>
                  <Link to="/events" className="dropdown-item">Events</Link>
                  <Link to="/contact" className="dropdown-item">Contact</Link>
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
