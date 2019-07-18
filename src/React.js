import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      string: []
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => {
        this.setState({ string: users });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.string.map(strings => (
          <h1 key={strings.id}>{strings.name} </h1>
        ))}

        {/* <button
          onClick={() => {
            this.setState({ string: "Rajesh gaaru" });
          }}
        >
          Nokku
        </button> */}
      </div>
    );
  }
}
export default App;
