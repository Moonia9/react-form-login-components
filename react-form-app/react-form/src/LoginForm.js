import React from "react";

export default class LoginForm extends React.Component {
  state = {
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
          name="email"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={(e) => this.change(e)}
        />
        <br />
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          placeholder="Enter your password"
          value={this.state.password}
          onChange={(e) => this.change(e)}
        />
        <br />
        <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        <p>
          Don't you have an account? <a>Sign up</a>
        </p>
      </form>
    );
  }
}
