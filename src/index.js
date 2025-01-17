import React from "react";
import 'bulma/css/bulma.css'
import './styles.css'
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store/slices";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = createRoot(el);
root.render
(<Provider store={store}>
<App />
</Provider>);

