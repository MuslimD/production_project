import { classNames } from "shared/lib/classNames/classNames";
import { Link, Route, Routes } from "react-router-dom";
import { useThema } from "./provider/themeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { Suspense } from "react";
import "./styles/index.scss";
import { AppRouter } from "./provider/router";

export const App = () => {
  const { theme, handleThema } = useThema ();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={handleThema}>Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <AppRouter />
    </div>
  );
};
