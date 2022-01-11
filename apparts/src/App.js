import { Component } from "react";

import data from "data";
import { Form, List } from "components";

import Clock from "containers/Clock";

import "App.css";

class App extends Component {
  state = { value: "", filtered: data };

  handleChange(ev) {
    const { value } = ev.target;

    this.setState({
      value,
      filtered: data.filter((appart) =>
        appart.title.toLowerCase().includes(value.toLowerCase())
      ),
    });
  }

  render() {
    const {
      handleChange,
      state: { value, filtered },
    } = this;

    return (
      <div className="App">
        <header className="App-header">
          <Clock />
          <Form handleChange={handleChange.bind(this)} value={value} />
          {filtered.length === 0 ? (
            "Appart not found"
          ) : (
            <List data={filtered} />
          )}
        </header>
      </div>
    );
  }
}

export default App;
