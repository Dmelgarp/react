// FUNCIONES EXTERNAS 
import {useState} from "react"

function CambiarCurso (cursos, nuevoCurso, index) {
    const nuevosCursos = [...cursos]
    nuevosCursos[index] = nuevoCurso
    return nuevosCursos
}

// ESTRUCTURA PRINCIPAL
export function SegundoComponente () {
    const nombre = "Diego Melgar Parada"
    const web = "www.diego.com"
    const edad = 3
    const [cursos, setCursos] = useState([
        "Ingenieria termonuclear",
        "Como tomar Agua",
        "Boxeo con kanguros",
    ])
    
// RESULTADO DEVUELTO
    return (
        <>
            <h1>Segundo Componente</h1>
            <p>{nombre}</p>
            <p>{web}</p>
            <p>{edad}</p>
            
            <hr/>
            
            <h2>Cursos Disponibles</h2>
            <ul>
                {
                    cursos.map((curso, index) => {
                        return (
                            <li key={index}> <strong className={curso.length <= 5 ? 'rojo':'verde'}> {curso} </strong> </li>
                        )
                    })
                }
            </ul>
            <button type="button" onClick={() => setCursos(CambiarCurso(cursos, "Como tomar alcohol", 0))}> Cambiar Curso </button>
            <input type="text" onChange={(e)=> setCursos(CambiarCurso(cursos, (e.target.value), 0))} />
        </>
    )
}
