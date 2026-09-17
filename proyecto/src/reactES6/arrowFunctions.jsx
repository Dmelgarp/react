import {useEffect} from "react"

// ******************* FUNCIONES EXTERNAS ************************************

// Clase con funcion normal
class Header {
    constructor() {
        this.color = "Red"
    }

    changeColor() {
        document.getElementById("demo").innerHTML += this
    }
}

// Clase con funcion flecha
class Header2 {
    constructor() {
        this.color = "Red"
    }

    changeColor = () => {
        document.getElementById("demo2").innerHTML += this
    }
} 

// ******************** ESTRUCTURA PRINCIPAL **********************************
export default function Funciones() {
    const hello = function () {
        return "Esta es una funcion normal."
    }
    const hola = () => {
        return "Esta es una funcion flecha."
    }
    const short = () => "Una simplificada. "
    const param = (val) => "Flecha con " + val
    const paramPan = val => `Si solo tienes un ${val} puedes omitir el parentesis`

    const myHeader = new Header()
    const myHeader2 = new Header2()

    // useEffect se usa para manejar efectos secundarios (como listeners)
    useEffect(() => {
        // El objeto window llama a la funcion changeColor
        window.addEventListener("load", myHeader.changeColor)

        // El boton que llama a la funcion changueColor
        const btn = document.getElementById("btn")
        btn.addEventListener("click", myHeader.changeColor)

        // Cleanup: Eliminamos listeners cuando el componente se desmonta
        return () => {
            window.removeEventListener("load", myHeader.changeColor)
            btn.removeEventListener("click", myHeader.changeColor)
        }
    }, [myHeader])

    useEffect(() => {
        window.addEventListener("load", myHeader2.changeColor)

        document.getElementById("btn2").addEventListener("click", myHeader2.changeColor)

        return () => {
            window.removeEventListener("load", myHeader2.changeColor)
            btn.removeEventListener("click",myHeader2.changeColor )
        }
        
    },[myHeader2])
    
    // ********************* RESULTADO DEVUELTO ************************************
    return (
        <>
            <h1>Funciones Flecha</h1>
            <p>{hello()}</p>
            <hr />
            <p>{hola()}</p>
            <hr />
            <p>{short()}</p>
            <p>
                La funcion flecha espera un valor de retorno y por defecto devuelve un valor
                aunque no se declare el <strong>return.</strong> <br />
                nota: esto solo funciona cuando la funcion tiene una sola instruccion.
            </p>
            <hr />
            <p>{param("parametro")}</p>
            <hr />
            <p>{paramPan("parametro")}</p>
            <hr />
            <h2>Funcion Normal</h2>
            <p>Como es una funcion regular la palabra clave <strong>This</strong> representa diferentes objetos dependiendo
                de como se haya llamado a la funcion</p>
            <button id="btn">Dame click</button>
            <p><strong>This</strong> Representa: </p>
            <p id="demo"></p>
            <p>Observa la diferencia antes y despues de hacer click en el boton</p>
            <hr/>
            <h2>Funcion Flecha</h2>
            <p>La palabra clave <strong>This</strong> representa el objeto <strong>Header</strong></p>
            <p id="demo2"></p>
            <button id="btn2">Dame click!</button>
            <hr/>
            <p>Cuando las funciones llaman a <strong>This. </strong>La funcion flecha siempre apunta al objeto Header.
                La funcion normal depende de quien la llame, primero llama a la ventana, al dar click llama al boton.
            </p> 
        </>
    )
} 