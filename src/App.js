import './App.css';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';

import Books from './components/Books';
import Catagories from './components/Catagories';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div className="header-container">
            <div className="header-left">
              <h1 className="header-title">Bookstore CMS</h1>
              <nav>
                <ul className="links">
                  <li>
                    <Link to="/">Books</Link>
                  </li>
                  <li>
                    <Link to="/catagories">Categories</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/catagories" element={<Catagories />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
