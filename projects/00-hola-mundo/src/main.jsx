import React from 'react' //Se importa React desde las dependencias descargadas en local
import ReactDOM from 'react-dom/client' //Se importa ReactDOM desde las dependencias descargadas en local
import App from './App.jsx' 
import './index.css' //Vite permite importar css de esta manera

//Se crea el root, el cual va ha ser el div con id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
//Voy por el min: 50:57 -> https://youtu.be/7iobxzd_2wY?si=6KEylPmnsnsnunlJ&t=3007 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
