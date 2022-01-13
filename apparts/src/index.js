import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "layout/Main";

import Home from "routes/Home";
import Apparts from "routes/Apparts";
import Appart from "routes/Appart";
import Clock from "routes/Clock";
import Fetch from "routes/Fetch";
import ToDo from "routes/ToDo";

import { MainProvider } from "contexts/Main";
import { ModalProvider } from "contexts/Modal";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <ModalProvider>
      <MainProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="apparts">
              <Route index element={<Apparts />} />
              <Route path=":slug" element={<Appart />} />
            </Route>
            <Route path="clock" element={<Clock />} />
            <Route path="fetch" element={<Fetch />} />
            <Route path="todo" element={<ToDo />} />
          </Route>
        </Routes>
      </MainProvider>
    </ModalProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
