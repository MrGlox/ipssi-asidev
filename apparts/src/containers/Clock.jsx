import { Component } from "react";

class Clock extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.interval = () => {
      this.setState({
        date: new Date(),
      });
    };

    setInterval(this.interval, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h2>{this.state.date.toLocaleTimeString()}</h2>;
  }
}

export default Clock;
