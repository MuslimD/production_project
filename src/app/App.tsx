import { classNames } from "shared/lib/classNames/classNames";
import { useThema } from "./provider/themeProvider";
import { AppRouter } from "./provider/router";
import { NavBar } from "widgets/NavBar";
import "./styles/index.scss";
import { SideBar } from "widgets/SideBar";

export const App = () => {
  const { theme } = useThema();
  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <div className="content_page"><AppRouter />
      <SideBar /></div>
    </div>
  );
};
