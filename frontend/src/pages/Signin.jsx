import React from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  let navigate = useNavigate();

  const sendData = (event) => {
    event.preventDefault();
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    function sendToken() {
      localStorage.setItem("token", JSON.stringify(token));
    }

    // -- Envoyer le formulaire au backend via un fetch POST
    fetch(`http://localhost:3000/api/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(function (res) {
        if (res.ok) {
          return res.json();
        }
      })
      .then(function (res) {
        console.log(res);
        sendToken();
        navigate("/home");
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={sendData} id="sign-up-form">
        <h1>Sign in</h1>
        <div className="inscription__inputs">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" ref={emailInput} />
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="password" ref={passwordInput} />
        </div>
        <div className="password.error"></div>
        <p className="connexion__txt">
          I don't own an account, i am{" "}
          <NavLink to="/signup">creating one</NavLink>
        </p>
        <div align="center">
          <button type="submit">Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
d;
