import { wrapper } from "@/Redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import "@/styles/globals.css";
function App({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}

export default wrapper.withRedux(App);
