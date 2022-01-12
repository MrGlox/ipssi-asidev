import { Component } from "react";
import { Loader } from "components";

class Fetch extends Component {
  state = { data: [], isLoading: true, hasError: false };

  async fetchAPI() {
    try {
      const response = await fetch(
        "https://baconipsum.com/api/?type=mand-filler"
      );

      const data = await response.json();
      this.setState({ data, isLoading: false }); // equivalent data: data
    } catch (err) {
      console.error(err);
      this.setState({ hasError: true, isLoading: false });
      throw err;
    }
  }

  componentDidMount() {
    this.fetchAPI();
  }

  render() {
    const { hasError, isLoading, data } = this.state;

    if (isLoading) return <Loader />;
    if (hasError) return <div>Erreur au fetch</div>;

    return <div>{data}</div>;
  }
}

export default Fetch;
