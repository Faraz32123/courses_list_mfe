import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import CoursesListPage from "./coursesListPage";

render(
  <BrowserRouter>
    <Provider store={store}>
      <CoursesListPage />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
