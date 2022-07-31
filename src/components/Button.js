import React from "react";
import '../styles/Buttons.css'
function Button({texto, isClickButton, manejarClic}){
    return(
        <button 
        className={isClickButton ? 'clicButton' : 'resetButton'}
        onClick={manejarClic} >
            {texto}
        </button>
    )

}


export default Button;