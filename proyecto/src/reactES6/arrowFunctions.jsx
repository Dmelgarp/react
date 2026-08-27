// Funciones externas 

// Estructura principal
export default function Normal () {
const hello = function (){
    return "Esta es una funcion normal"
}
const hola = () => {
    return "Esta es una funcion flecha"
}
const short = () => "Una simplificada"
// Resultado devuelto
    return (
        <>
            <h1>Funciones Flecha</h1>
            <p>{hello()}</p>
            <p>{hola()}</p>
        </>
    )
}