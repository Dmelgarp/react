import {useEffect} from "react"

//  *********************** FUNCIONES EXTERNAS *******************************

class Header {
    constructor() {
        this.color = "Red"
    }
    changeColor() {
        document.getElementById("demo").innerHTML += this
    }
}

class Header2 {
    constructor() {
        this.color = "Red"
    }
    changeColor = () => {
        document.getElementById("demo2").innerHTML += this
    }
}
//  *********************** ESTRUCTURA PRINCIPAL *******************************

export default function ArrowFun () {
    const hola = function () {
        return "Esta es una funcion normal"
    }
    const holas = () => {
        return "Esta es una funcion flecha"
    }
    const aloha = () => "No hacen falta llaves ni return"
    const ohana = (val) => "asi se usa un " + val
    const jose = val => `si solo tienes un ${val} puedes omitir los parentesis`

    const myHeader = new Header()
    const myHeader2 = new Header2()

    // MANEJAR EFECTOS SECUNDARIOS COMO LISTENERS 
    useEffect (() => {
        // la ventana llama a la funcion changeColor
        window.addEventListener("load", myHeader.changeColor)
        window.addEventListener("load", myHeader2.changeColor)

        // el boton que va a llamar a ala funcion 
        const btn = document.getElementById("btn")
        btn.addEventListener("click", myHeader.changeColor)
        const btn2 = document.getElementById("btn2")
        btn2.addEventListener("click", myHeader2.changeColor)

        // cleanUp: eliminamos listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("load", myHeader.changeColor)
            btn.removeEventListener("click", myHeader.changeColor)
        }
    },[myHeader, myHeader2])

//  *********************** RESULTADO DEVUELTO *******************************
    return (
        <>
            <h1>Funciones</h1>
            <p>{hola()}</p>
            <hr></hr>
            <p>{holas()}</p>
            <hr></hr>
            <p>{aloha()}</p>
            <hr></hr>
            <p>{ohana("parametro")}</p>
            <hr></hr>
            <p>{jose("picaporte")}</p>
            <hr></hr>
            <p id="demo"></p>
            <button id="btn">boton</button>
            <hr></hr>
            <p id="demo2"></p>
            <button id="btn2">click</button>
        </>
    )
}