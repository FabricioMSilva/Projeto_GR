import React from "react";
import { useNavigate } from "react-router-dom";
import "../menu/menu.css";


const Menu = () => {
    const navigate = useNavigate()
    const goCadastro = () => {
      navigate("/Cadastro")
    }
    return (
        <div className="geral_Div">
      
            <div className="geral_menu">
                <nav className="menu-nav">
                    <ul className="nav-ul">
                        <li className="btn-menu" onClick={goCadastro}>Cadastro</li>
                        <li className="btn-menu" >Desenhos</li>
                        <li className="btn-menu" >Pesquisador</li>

                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Menu;