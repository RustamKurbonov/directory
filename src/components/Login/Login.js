import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const [opacity, setOpacity] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    if (props.dataLogin === data.login && props.dataPass === data.pass) {
      localStorage.setItem("login", data.login);
      localStorage.setItem("pass", data.pass);
      reset();
      window.location.href = "/dictionary";
    } else {
      setOpacity(1);
    }
  };

  return (
    <div className="login">
      <div className="login__title title">Авторизация</div>
      <form className="login__form" onSubmit={handleSubmit(submit)}>
        <label>
          Введите ваше имя
          <input
            type="text"
            placeholder="Имя"
            {...register("login", { required: true })}
          />
          {errors.login ? <div className="login__error">Введите имя</div> : ""}
        </label>
        <label>
          Введите ваш пароль
          <input
            type="password"
            placeholder="Пароль"
            {...register("pass", { required: true })}
          />
          {errors.pass ? (
            <div className="login__error">Введите пароль</div>
          ) : (
            ""
          )}
        </label>
        <label>
          <input type="submit" placeholder="Пароль" value="Отправить" />
        </label>
      </form>
      <div style={{ opacity: opacity }} className="login__error">
        Логин или пароль неверный
      </div>
    </div>
  );
};

export default Login;
