import { Link } from "react-router-dom";

import "styles/App.css";

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1>Mon app</h1>
      <nav>
        <ul>
          <li>
            <Link to="/apparts">Apparts</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

export default Home;
