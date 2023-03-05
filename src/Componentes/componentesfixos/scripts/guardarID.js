import React from "react";

const   guardarID = ()=>{

    var nome = Number(Document.getElementById(ID));

localStorage.setItem("id", nome);



    return(
        console.log(localStorage.getItem("id"))
    )
}

export default guardarID();