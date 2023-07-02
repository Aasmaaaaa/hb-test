import React, { useState } from "react";

function SignUpForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />{" "}
      </label>{" "}
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />{" "}
      </label>{" "}
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />{" "}
      </label>{" "}
      <button type="submit"> Sign Up </button>{" "}
    </form>
  );
}

export default SignUpForm;
