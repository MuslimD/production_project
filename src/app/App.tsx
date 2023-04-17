import { classNames } from "shared/lib/classNames/classNames";
import { useThema } from "./provider/themeProvider";
import { AppRouter } from "./provider/router";
import { NavBar } from "widgets/NavBar";
import "./styles/index.scss";

export const App = () => {
  const { theme } = useThema();
  return (
    <div className={classNames("app", {}, [theme])}>
      <NavBar />
      <AppRouter />
    </div>
  );
};
