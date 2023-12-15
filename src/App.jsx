import "./App.css";
import React, {useState, useEffect} from "react";
import AppRouter from "./routes";

import api from "./Api.js"
import axios from "axios"

function App() {

  useEffect(() => {
    api.get('evento').then(res=>{
      console.log(res.data);
    })
  })
  
  return (
    <AppRouter />
  );
}

export default App;
