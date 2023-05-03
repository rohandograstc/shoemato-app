import Page from "@/Roles/Example/Page";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";

const Index = (props) => {
  const { t, i18n } = useTranslation();

  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle(t("title"));
  }, [t("title")]);

  return (
    <>
      <Page title={title} linkTo="/other" />
      <div>
        <button onClick={() => i18n.changeLanguage("fr")}>
          change Lang fr
        </button>
        <button onClick={() => i18n.changeLanguage("en")}>
          change Lang en
        </button>
      </div>
    </>
  );
};

export default Index;
