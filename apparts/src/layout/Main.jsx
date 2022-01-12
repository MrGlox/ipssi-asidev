import { Outlet } from "react-router-dom";
import { Link } from "components";

import "styles/App.css";

const Main = () => (
  <div className="App">
    <header className="App-header">
      <nav>
        <ul>
          <li>
            <Link to="/apparts">Apparts</Link>
          </li>
          <li>
            <Link to="/clock">Clock</Link>
          </li>
          <li>
            <Link to="/fetch">Fetch</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className="App-main">
      <Outlet />
    </main>
  </div>
);

export default Main;
