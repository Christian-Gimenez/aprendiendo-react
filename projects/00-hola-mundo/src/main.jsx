import React from 'react' 
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx' //Importamos el componente creado
import "./index.css" //Importamos el CSS

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <App />
);