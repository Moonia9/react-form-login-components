import React, { Component } from "react";
import "./App.css";
import Homepage from "./HomePage";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

class App extends Component {
  state = {
    fields: {},
  };

  onChange = (updatedValue) => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue,
      },
    });
  };

  render() {
    return (
      <div className="App">
        <LoginForm onChange={(fields) => this.onChange(fields)} />
        <RegisterForm onChange={(fields) => this.onChange(fields)} />
        <Homepage />
        {/* <p>
          {JSON.stringify(this.state.fields, null, 2)}
        </p> */}
      </div>
    );
  }
}

export default App;
