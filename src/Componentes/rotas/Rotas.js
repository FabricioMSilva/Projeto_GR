import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Entrar from "../Login/Entrar.jsx";
import Home from "../conjuntos/card.jsx";
import Cadastro from "../conjuntos/cadastro"
import Card from "../conjuntos/card.jsx";
import Detalhes from "../conjuntos/detalhes.jsx";

const  Router = () => {


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Card/>} /> 
                    <Route path="/Card" element={<Card/>} />
                    <Route path="/Detalhes/:id" element={<Detalhes/>} />
                    <Route path="/Cadastro" element={<Cadastro/>} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};
export default Router;


