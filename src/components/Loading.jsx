import { Component } from "react";

class Loading extends Component {
  componentWillMount() {
    console.log("loading aparece...");
  }
  componentWillUnmount() {
    console.log("Loading desaparece...");
  }
  render() {
    return <p>Loading...</p>;
  }
}
export { Loading };
