import { Link } from "react-router-dom";

import AppartsContainer from "containers/Apparts";

import "styles/App.css";

const Apparts = () => (
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
      <AppartsContainer></AppartsContainer>
    </header>
  </div>
);

export default Apparts;
