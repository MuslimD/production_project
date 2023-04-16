import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Link, Route, Routes } from "react-router-dom";
import { classNames } from "./helpers/classNames/classNames";
import { useThema } from "./theme/useThema";
import { Suspense } from "react";
import "./styles/index.scss";
 
export const App = () => {
  const { theme, handleThema } = useThema();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={handleThema}>Theme</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>...Loading</div>}>
        <Routes>
          <Route path={"/"} element={<MainPageAsync />} />
          <Route path={"/about"} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
