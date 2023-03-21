import React from 'react';
import ReactDOM from 'react-dom/client';
// Тут, в index.css, я буду задавати стилі.
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/*
  Тут ми створюємо корінь застосунку, який потім використовуємо
  для рендерингу компоненту App або іншого коду. Метод createRoot
  описаний тут:
  https://reactjs.org/docs/react-dom-client.html#createroot
*/
const root = ReactDOM.createRoot(document.getElementById('root'));
/*
root.render(
    // <h1>React</h1>
    React.createElement(
        "h1",
        null,
        "React"
    )
);
*/
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
