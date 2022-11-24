function Body () {
    return(
        <section>
            <div>
                <div className="information">
                    <h1>Bienvenidos</h1>
                    <p>Si necesitas contactarte con nosotros, puedes hacerlo completando el formulario que esta debajo.</p>
                </div>
                <div className="inputs">

                </div>
                <form id="contact-form">
                    <input type="text" placeholder="Enter your name" id="input-name" required></input>
                    <textarea type="text" placeholder="Enter your message" rows="6" id="input-message" required></textarea>
                    <button id="submit-btn">Submit</button>
                </form>
            </div>
        </section>
    )

}

export default Body;