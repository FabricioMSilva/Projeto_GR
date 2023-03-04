import React from "react";
import Footer from "../componentesfixos/footer/footer";
import Menu from "../componentesfixos/menu/menu";

import "./Home.css";
import Card from "../conjuntos/card";


const Home = () => { 

 
    return(
        <div className="geralHome">
           
            <Menu/>
                <div className="img_fundo">
             
                 <Card/>
                </div>
            <Footer/>
          
        </div>
    );}

export default Home;