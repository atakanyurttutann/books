import "../styles/globals.css";
import { store } from "@/src/redux/store";
import { Provider } from "react-redux";
import ApiProvider from "@/components/ApiProvider";
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ApiProvider />
    </Provider>
  );
}
