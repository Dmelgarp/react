import {useState} from "react"

function Counter() {
    // se desestructura el array devuelto por el useState
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    )
}

function dateInfo(dat) {
    const d = dat.getDate()
    const m = dat.getMonth()
    const y = dat.getFullYear()

    return [d, m, y,]
}

function Greeting({name, age}){
    return <h3>Hola, {name} tu edad es de {age}</h3>
}

export default function Destructuring() {
    // forma antigua de asignar elementos de un array a una variable
    const vehicles = ["mustang", "f1", "caterpilar"]
    const car = vehicles[0]
    const race = vehicles[1]
    const tractor = vehicles[2]

    // Nueva forma de asignar variables
    const [cars, speed, tractors] = vehicles // el ordern de las variables es importante
    // Si queremos omitir un elemento quitamos la variable pero dejamos la coma
    const [auto, , trac] = vehicles

    // La desestructuracion es util cuando una funcion devuelve un array
    const [date, month, year] = dateInfo(new Date())

    // puedes usar la desestructuracion para extraer los valores de un objeto
    const person = {
        firstName: "Jhon",
        lastName: "Doe",
        age: 50
    }

    //const {lastName, age, firstName} = person
    
    // puedes agregar un valor extra
    const {firstName, lastName, age, country="Riberalta"} = person

    // desestructuracion con atributos anidados
    const persona = {
        nombre: "Diego",
        apellido: "Melgar",
        edad: 50,
        auto: {
            marca: "Ford",
            modelo: "Mustang",
        }
    }

    const {nombre, auto: { marca, modelo}} = persona

return (
    <>
        <h1>Desestructuracion de Arrays</h1>
        <p>{tractor}</p>
        <p>{speed}</p>
        <p>{auto}</p>
        <p>Hoy es {date} de {month} del {year}</p>
        <h1>Desestructuracion de objetos</h1>
        <p>{firstName} {lastName} {age} {country}</p>
        <p>{nombre} {marca} {modelo}</p>
        <h1>Desestructuracion de componentes</h1>
        <p>La desestructuracion es especialmente util en react para trabajarcon props
            hooks y respuestas de API. Ayuda a que tu codigo sea mas conciso y facil de leer.
        </p>
        <h2>Desestructuracion de props</h2>
        <Greeting name="Diego" age={23} />
        <h2>Desestructuracion del Hook useState </h2>
        <Counter/>
    </>
)
}