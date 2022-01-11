import { Component } from "react";

import data from "data";
import { List } from "components";
import Clock from "containers/Clock";

import "App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Mon commentaire */}
          {console.log("test")}
          <Clock />
          <List data={data} />
        </header>
      </div>
    );
  }
}

export default App;
