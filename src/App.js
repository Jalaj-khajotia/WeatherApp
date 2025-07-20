import "./styles.css";
import useSWR from "swr";
import Swr from "./Swr";
import React from "react";
import ReactDOM from "react-dom";

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  updateCount() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={() => this.updateCount()}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>Hello Jalaj CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Button />
      <Swr />
    </div>
  );
}
