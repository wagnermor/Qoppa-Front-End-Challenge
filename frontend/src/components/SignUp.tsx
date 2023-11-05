import React, { useState } from "react";
import axios from "axios";
import styles from "./SignUp.module.css";


interface User {
  username: string;
  email: string;
  password: string;
}

export default function SignUp() {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    axios.post("http://localhost:3000/singUp", JSON.stringify(user), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        response.data = user;
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className={ styles.signup_box}>
      <h1>Cadastro de Usuário</h1>

      <input
        type="text"
        placeholder="Username"
        name="username"
        value={user.username}
        onChange={handleChange}
      />

      <input
        type="email"
        placeholder="E-mail"
        name="email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        type="password"
        placeholder="Password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />

      <button onClick={handleSubmit}>Cadastrar</button>
    </div>
  );
}
