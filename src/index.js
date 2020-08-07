import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./domain/redux/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import theme from "./presentation/theme";

const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App.tsx", render);
}
serviceWorker.unregister();
