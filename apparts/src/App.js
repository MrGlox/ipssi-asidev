import { Component } from "react";

import "./App.css";

import "./components";
import { Item, List } from "./components";

class App extends Component {
  render() {
    return (
      <div class="App">
        <header className="App-header">
          {this.state.x}
          {/* Mon commentaire */}
          {console.log("test")}
          <List />
        </header>
      </div>
    );
  }
}

export default App;
