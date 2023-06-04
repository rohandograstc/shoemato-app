import Page from "@/Roles/Example/Page";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import Register from "@/components/Register/Register";
const Index = (props) => {
  const { t, i18n } = useTranslation();

  const [title, setTitle] = useState();

  useEffect(() => {
    setTitle(t("title"));
  }, [t("title")]);

  return (
    <>
      <Stack direction="row">
        <Register />
      </Stack>
    </>
  );
};

export default Index;
