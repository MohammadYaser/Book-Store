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
              <h1>Books Store</h1>
              <nav>
                <ul>
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
