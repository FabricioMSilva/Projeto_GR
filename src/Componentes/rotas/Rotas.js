import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Entrar from "../Login/Entrar.jsx";
import Home from "../Home/Home.jsx";
import Cadastro from "../conjuntos/cadastro"

const  Router = () => {


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Entrar/>} /> 
                    <Route path="/Home" element={<Home/>} />
                    <Route path="/Cadastro" element={<Cadastro/>} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};
export default Router;


