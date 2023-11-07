export default function Newsletter(){
    return(
        <>
            <form className="d-flex flex-row mx-1 my-4 justify-content-center flex-wrap">
                <h4 className="text-center">Cadastre-se Para Receber Novidades de nossos produtos:</h4>

                <input className="mx-4 my-2 text-center" type="email" placeholder="Insira seu email" />
                <input type="buttom" className="btn btn-secondary" value="Se Inscreva Já" />
            </form>
        </>
    )
}