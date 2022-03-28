import React, { useState } from "react";
import siteMap from "../../siteMap/config.json";
import text from "./assets/text.json";
import correctData from "./assets/correctData.json";

export const Login = () => {
  const [errorVisibility, setErrorVisibility] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleProcessClick = (event) => {
    event.preventDefault();
    if (correctData.login === login && correctData.password === password) {
      localStorage.setItem("login", login);
      localStorage.setItem("password", password);
      setLogin("");
      setPassword("");
      setErrorVisibility(false);
      window.location.href = siteMap.dictionary.path;
    } else {
      setErrorVisibility(true);
    }
  };

  return (
    <div className="login">
      <div className="login__title title">{siteMap.login.name}</div>
      <form className="login__form">
        <label>
          {text.labelLogin}
          <input
            type="text"
            placeholder="Имя"
            value={login}
            onChange={(event) => setLogin(event.target.value)}
            required
          />
        </label>
        <label>
          {text.labelPassword}
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <label>
          <input type="submit" value="Отправить" onClick={handleProcessClick} />
        </label>
      </form>
      {errorVisibility && (
        <div className="login__error">{text.errorMessage}</div>
      )}
    </div>
  );
};
