import NavBar from "./NavBar"

export const LayOut = ({ children }) => {
    return (
        <main>
            <div>
                <NavBar></NavBar>
                {children}
            </div>
        </main>
    )

}
