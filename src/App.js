import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import './styles/App.css';
import Home from './components/Home';
import About from './components/About';
import Quote from './components/Quote';
import Insurance from './components/Insurance';
import Blog from './components/Blog';
import Events from './components/Events';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="Nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/quote">Request Quote</Link>
            <Link to="/insurance">Insurance Solutions</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/events">Events</Link>
            <Link to="/contact">Contact</Link>
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
