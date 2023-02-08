import React from "react";

import "../menu/menu.css";


const Menu = () => {
    return (
        <div className="geral_Div">
      
            <div className="geral_menu">
                <nav className="menu-nav">
                    <ul className="nav-ul">
                        <li className="btn-menu" >Conjuntos</li>
                        <li className="btn-menu" >Desenhos</li>
                        <li className="btn-menu" >Pesquisador</li>

                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Menu;