import { useState } from "react";

export default function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    props.onSubmit({
      email,
      password,
    });
  };

  const handleToggle = (e) => {
    e.preventDefault();
    props.onToggle();
  };

  return (
    <div className="centerContainer">
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>Password</p>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign in</button>
        <p>
          Don't have an account?{" "}
          <a href="/#" onClick={handleToggle}>
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
