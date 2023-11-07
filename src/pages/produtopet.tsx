import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function ProdutoPet() {
    return (
        <>
            <Navbar />
            <h1 className="text-center">Cadastrar Produto</h1>


            <main className="d-flex justify-content-center">


                <form className="d-flex flex-column w-25 justify-content-center">

                    <label className="me-2" htmlFor="id_produtopet">Matricula do Produto Pet: </label>
                    <input className="text-center my-1" name="id_produtopet" id="id_produtopet" type="text" ></input>

                    <label className="me-2" htmlFor="descricao">Descrição: </label>
                    <input className="text-center my-1" name="descricao" id="descricao" type="text" placeholder="Insira sua Descrição"></input>

                    <label className="me-2" htmlFor="fornecedor">Fornecedor: </label>
                    <input className="text-center my-1" name="fornecedor" id="fornecedor" type="text" placeholder="Insira seu Fornecedor"></input>

                    <label className="me-2" htmlFor="data_validade">Data de Validade: </label>
                    <input className="text-center my-1" name="data_validade" id="data_validade" type="date" placeholder="Insira seu Fornecedor"></input>

                    <label className="me-2" htmlFor="quantidade_estoque">Quantidade em Estoque: </label>
                    <input className="text-center my-1" name="quantidade_estoque" id="quantidade_estoque" type="number" placeholder="Insira seu Fornecedor"></input>


                    <input value="Cadastrar Novo Produto" type="submit" className="btn btn-primary my-3" />

                </form>
            </main>

            <Footer />
        </>
    )
}


/**value="54ba0080-f4e8-4b5f-aa1a-97e787e87ac1" */