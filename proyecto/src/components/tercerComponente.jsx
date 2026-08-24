export default function Cars(){
    class Car {
            constructor (name){
                this.brand = name
            }
        }

    const car = new Car("ford")
    return(
        <>
            <h1>Este es el tercer componente</h1>
            <p>{car.brand}</p>
        </>
    )
}