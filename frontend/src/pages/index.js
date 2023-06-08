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
     
    </>
  );
};

export default Index;
