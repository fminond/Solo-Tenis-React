function Header ({name, setName}) {
    const changeName= () => {
        if(name==="Feche"){
            setName("Fede")
        }
        else{
            setName("Feche")
        }
    }
    return (
        <div>
            <h1>Hola {name} </h1>
            <button onClick={changeName}>Cambiar Nombre</button>
        </div>
    )
};


export default Header;