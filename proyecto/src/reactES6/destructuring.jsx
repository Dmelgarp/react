function dateInfo(dat) {
    const d = dat.getDate()
    const m = dat.getMonth()
    const y = dat.getFullYear()

    return [d, m, y,]
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
    const {firstName, lastName, age} = person

return (
    <>
        <h1>Desestructuracion de Arrays</h1>
        <p>{tractor}</p>
        <p>{speed}</p>
        <p>{auto}</p>
        <p>Hoy es {date} de {month} del {year}</p>
        <h1>Desestructuracion de objetos</h1>
        <p>{firstName}</p>
    </>
)
}