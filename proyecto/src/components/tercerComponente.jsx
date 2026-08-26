export default function Cars (){
    class Car {
        constructor(name){
            this.brand = name
        }
    }

    const myCar =  new Car("Auto")

    return (
        <>
            <h1>Este es el segundo componente</h1>
            <p>{myCar.brand}</p>
        </>
    )
}