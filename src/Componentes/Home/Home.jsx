import React from "react";
import Footer from "../componentesfixos/footer/footer";
import Menu from "../componentesfixos/menu/menu";
import emage from "./imagens/index.jpg";
import "./Home.css";


const Home = () => { 

 
    return(
        <div className="geralHome">
           
            <Menu/>
                <div className="img_fundo">
                 <img src={emage} alt="" className="minhaimagem"/>
                </div>
            <Footer/>
          
        </div>
    );}

export default Home;