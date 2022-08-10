import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ConfigProvider } from 'antd';
import "./index.css";
import 'antd/dist/antd.variable.min.css';

ConfigProvider.config({
  theme: {
    primaryColor: '#0b8235',
  },
});

ReactDOM.render(
  // 严格模式，antd的弹窗会warning
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
