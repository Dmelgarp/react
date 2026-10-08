function fruitList(fruit) {
    return (
        <ul>
            {fruit.map(fruit =>
                <li key={fruit}>{fruit}</li>
            )}
        </ul>
    )
}

function listUsers(users) {
    return (
        <ul>
            {users.map(user =>
                <li key={user.id}>
                    {user.name} tiene {user.age} años
                </li>
            )}
        </ul>
    )
}

export default function Map() {
    const numbers = [1, 2, 3, 4]
    const doubled = numbers.map(x => x * 2)
    const fruit = ['manzana', 'guineo', 'fresas']

    const users = [
        { id: 1, name: 'Diego', age: 30 },
        { id: 2, name: 'Cristian', age: 7 },
        { id: 3, name: 'Ester', age: 60 },
        { id: 4, name: 'Marce', age: 100 },
    ]
    return (
        <>
            <h1>Map</h1>

            <p>El metodo map es un iterador de arrays, se ejecuta una vez por cada
                elemento del array. Devuelve un nuevo array con los resultados de esa funcion.
            </p>
            {doubled}
            <p>Lista de frutas</p>
            {fruitList(fruit)}
            <p>Tambien puedes usar map con arrays de objetos</p>
            {listUsers(users)}
            <h1>Parametros de MAP()</h1>
            <p>
                {"array.map((elemento, indice, arrayOriginal) => { return valor})"}
                <br />
                El metodo map toma 3 parametros.<br />
                elemento: Elemento que se esta procesando actualmente<br />
                indice: El indice del elemento actual (opcional)<br />
                arrayOriginal: El array sobre el que se llamo la funcion (opcional)
            </p>

        </>
    )
}