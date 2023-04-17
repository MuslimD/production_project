import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { FC } from "react";

interface LangSwitcher {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcher> = ({ className }) => {
  const { t, i18n } = useTranslation();
  function handleLanguage() {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  }

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      theme={ButtonTheme.CLEAR}
      onClick={handleLanguage}
    >
      {t("Перевод")}
    </Button>
  );
};
