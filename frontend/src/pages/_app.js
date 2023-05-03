import { wrapper } from "@/Redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";
import "@/styles/globals.css";
import { Provider } from "react-redux";
function App({ Component, pageProps }) {
  console.log({wrapper});
  return (
    <Provider store={wrapper.store}>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </Provider>
  );
}

export default wrapper.withRedux(App);
