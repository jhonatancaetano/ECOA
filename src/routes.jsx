import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import VideosCadastrados from "./pages/VideosCadastrados"
import React, { useRef } from 'react';
import ConfirmacaoPresenca from "./pages/ConfirmacaoPresenca";
import EventoCadastrado from "./pages/EventoCadastrado"
import InscricaoUsuario from "./pages/InscricaoUsuario"
import Inscrito from "./pages/Inscrito"
import VerCadastrarEvento from "./pages/VerCadastrarEvento";

const AppRouter = () => {
    const myRef = useRef(null);
    return(
            <Routes>
                <Route path="/evento" element={<Home />}></Route>
                <Route path="/videos" element={<VideosCadastrados />}></Route>
                <Route path="/presenca" element={<ConfirmacaoPresenca />}></Route>
                <Route path="/eventocadastrado" element={<EventoCadastrado />}></Route>
                <Route path="/inscricao" element={<InscricaoUsuario />}></Route>
                <Route path="/inscrito" element={<Inscrito />}></Route>
                <Route path="/ver" element={<VerCadastrarEvento />}></Route>
            </Routes>
    )
}
export default AppRouter

