import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Entrar from "../Login/Entrar.jsx";
import Home from "../Home/Home.jsx";


const  Router = () => {


    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Entrar/>} /> 
                    <Route path="/Home" element={<Home/>} />
                </Routes>

            </BrowserRouter>
        </div>
    );
};
export default Router;


