import { Component } from "react";

class Fetch extends Component {
  state = { data: [] };

  async fetchAPI() {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler"
      );

      const data = await response.json();
      this.setState({ data }); // equivalent data: data
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Fetch;
