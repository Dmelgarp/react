function MyButton(){
    return (
        <button>
            Soy una abeja
        </button>
    );
}

export default function MyApp() {
    return (
        <div>
            <h1>Este es el segundo componente</h1>
            <MyButton/>
        </div>
    );
}
