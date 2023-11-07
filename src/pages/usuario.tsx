import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Entrar() {
    return (
        <>
            <Navbar />
            <h1 className="text-center">Entrar</h1>

            <main className="d-flex justify-content-center">
                <form className="d-flex flex-column w-25 justify-content-center">

    
                    <label className="me-2" htmlFor="email">Email: </label>
                    <input className="text-center my-1" name="email" id="email" type="text" placeholder="Insira seu email"></input>
                    
                    <label className="me-2" htmlFor="Senha">Senha: </label>
                    <input className="text-center my-1" name="senha" id="senha" type="password" placeholder="Insira sua senha"></input>
                    

                    <input value="Entrar" type="submit" className="btn btn-primary my-3 rounded" />
                    <a className="text-center my-3" href="/cadastro">Ainda não tem conta ?</a>
                </form>
            </main>

            <div style={{paddingTop: "26.5rem"}} ></div>

            <Footer />
        </>
    )
}