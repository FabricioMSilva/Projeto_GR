import React from "react";
import { useNavigate } from "react-router-dom";
import ImgFundo from "./imagens/index222.jpg"
import "../Login/Entrar.css"


const Entrar = () => { 
  
    const navigate = useNavigate()
    const goHome = () => {
      navigate("/Home")
    }

    return(
        <div className="Geral">
            <div className="Fundo_Img">
                <img src={ImgFundo} className="Img_fundo" alt="imagem fundo" srcset="imagem fundo" />
            </div>
            <div className="input_senha">
             
                    <input type="text" value="Nr1" placeholder="Senha" className="Senha" />
          
                    
            </div>
            <div className="btnEntrar ">
                <button onClick={goHome} className="buttonClass" >Entrar</button>
            </div>
        </div>
    );
    
}

export default Entrar;