import "./App.css";
import React from "react";
import Home from "./pages/Home";
import VideosCadastrados from "./pages/VideosCadastrados";
import AppRouter from "./routes"
import ConfirmacaoPresenca from "./pages/ConfirmacaoPresenca"
import EventoCadastrado from "./pages/EventoCadastrado"
import InscricaoUsuario from "./pages/InscricaoUsuario"
import Inscrito from "./pages/Inscrito"
import VerCadastrarEvento from "./pages/VerCadastrarEvento"

function App() {
  return (
    <AppRouter />
  );
}

export default App;
