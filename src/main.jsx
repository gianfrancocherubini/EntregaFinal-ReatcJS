import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDB4Pq9BE5TohFcC1ExYKmdj1hKGYDUOsI",
  authDomain: "app-react-457d2.firebaseapp.com",
  projectId: "app-react-457d2",
  storageBucket: "app-react-457d2.appspot.com",
  messagingSenderId: "512104404018",
  appId: "1:512104404018:web:72b5ae6b914c88dce9182b"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
