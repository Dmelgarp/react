class Car {
    constructor(name) {
        this.brand = name
    }

    present() {
        return "Tengo un " + this.brand + " :b "
    }
}

class Model extends Car {
    constructor(name, mod, col) {
        super(name)
        this.model = mod
        this.color = col
    }
    show() {
        return this.present() + "modelo  " + this.model + " de color " + this.color
    }
}

export default function Cars() {
    const myCar = new Model("Toyota", "Corolla", "Negro")
    
    return (
        <>
            <h1>Este es el tercer componente</h1>
            <p>{myCar.show()}</p>
        </>
    )
}