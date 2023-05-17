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
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Logo from './assets/images/tree-top-insurance.png';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="App-wrap">
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
      
      <footer className="App-footer">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div className="footer-col">
              <div class="logo">
                <img src={Logo} className="footer-logo"/>
                <p>
                    As a full service Insurance Provider, Tree Top Insurance provides the insurance products you need. From standard home, health and auto insurance to business, health and long term care insurance, we offer a range of solutions for you at any stage of life.
                </p>
              </div>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/1175641719286949" target="_blank" title="Tree Top Insurance - Facebook Page">
                      <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                    </a>
                  </li>  
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div className="footer-col">
                <h5>Quick Links</h5>
                <ul>
                  <li>
                    <a href="/" title="Tree Top Insurance - Personal, Business, Health and Medicare Coverage in Minnesota and Wisconsin">
                        Home
                    </a>
                  </li>
                  <li>
                    <a href="/about/our-agency" title="Tree Top Insurance - About Us">
                        About Us
                    </a>
                  </li>
                    <li>
                      <a href="/insurance/personal-insurance" title="Tree Top Insurance - Personal Insurance in Medina, MN">
                          Personal
                      </a>
                    </li>
                    <li>
                      <a href="/insurance/business-insurance" title="Tree Top Insurance - Business Insurance in Medina, MN">
                          Business
                      </a>
                    </li>
                    <li>
                      <a href="/insurance/medicare" title="Tree Top Insurance - Senior and Medicare Coverage in Minnesota and Wisconsin">
                          Seniors
                      </a>
                    </li>
                    <li>
                      <a href="/resources/scope/medicare-meeting/" title="Scope of Appointment Form">
                          Scope of Appointment Form
                      </a>
                    </li>
                    <li>                                    
                      <a href="/quote" title="Tree Top Insurance - Get A Quote">
                          Get A Quote
                      </a>                                   
                    </li>
                    <li>
                      <a href="/contact" title="Tree Top Insurance - Contact Us">
                          Contact Us
                      </a>
                    </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-sm-3 offset-md-3">
              <div className="footer-col">
                <h5>Contact Info</h5>
                <ul>
                  <li>
                    <h6>Location:</h6>
                    <p>1382 Maplewood Dr, Long Lake, Minnesota 55356</p>
                  </li>
                  <li>
                    <h6>Email:</h6>
                    <a href="mailto:sandy@treetopins.com" title="Tree Top Insurance - Email Address">
                        sandy@treetopins.com
                    </a>
                  </li>
                  <li>
                    <h6>Phone:</h6>
                    <a href="tel:612-875-1382" title="Tree Top Insurance - Phone Number">
                        612-875-1382
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </footer>

    </Router>
  );
}

export default App;
