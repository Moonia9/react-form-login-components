import React from "react";

export default class RegisterForm extends React.Component {
  state = {
    fullName: "",
    email: "",
    password: "",
  };

  change = (e) => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    this.setState({
      fullName: "",
      email: "",
      password: "",
    });
    this.props.onChange({
      fullName: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <form>
        <input
          name="fullName"
          placeholder="Enter your full name"
          value={this.state.firstName}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          placeholder="Enter your password"
          value={this.state.password}
          onChange={(e) => this.change(e)}
        />
        <br />
        <button onClick={(e) => this.onSubmit(e)}>Submit</button>
      </form>
    );
  }
}
