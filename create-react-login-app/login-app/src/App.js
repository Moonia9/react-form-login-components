import { useState } from "react";
import Home from "./Components/Home";
import Signup from "./Components/Signup";
import Signin from "./Components/Signin";
import "./App.css";

function App() {
  const [show, setShow] = useState("signup");
  const [jwt, setJwt] = useState();
  const [error, setError] = useState();
  //const [loading, setLoading] = useState();

  const toggleShow = () => {
    if (show === "signup") {
      setShow("signin");
    } else {
      setShow("signup");
    }
  };

  const signUp = (params) => {
    console.log("Signing up", params);
    fetch("https://localhost:4000/sign-up", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((body) => {
        console.log(body.jwt);
        setJwt(body.jwt);
      });
  };

  const signIn = (params) => {
    console.log("Signing up", params);
    fetch("https://localhost:4000/sign-in", {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((body) => {
        if (body.error) {
          setError(body.error);
        } else {
          setError();
          setJwt(body.jwt);
        }
        //console.log(body.jwt);
      });
  };

  // const signIn = (params) => {
  //   console.log("Signing in", params);
  // };

  const renderComponent = () => {
    if (show === "signup") {
      return <Signup onToggle={toggleShow} onSubmit={signUp} />;
    } else if (show === "signin") {
      return <Signin onToggle={toggleShow} onSubmit={signIn} />;
    }
  };

  return <div className="App">{renderComponent()}</div>;
}

export default App;
