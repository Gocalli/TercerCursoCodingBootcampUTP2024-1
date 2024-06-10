

export function Button({ texto, claseBoton, manejarBoton }){
    
    return(
       <button className={ claseBoton ? "boton-click" : "boton-reiniciar" }
       onClick={manejarBoton}>
       {texto}
       </button>
    )

}