import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Layout from "./components/layout";
import { GlobalStyles } from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <GlobalStyles />
    <Layout>
      <App />
    </Layout>
  </Provider>
);
