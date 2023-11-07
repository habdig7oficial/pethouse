import Card from "./components/Card";
import Caroulsel from "./components/Caroulsel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "../assets/CSS/style.scss"
import Newsletter from "./components/Newsletter";

export default function Home() {
    return (
        <>
            <Navbar />

            <Caroulsel />


            <h1 className="text-center my-3">Conheça Nossos Produtos</h1>

            <div className="d-flex flex-row justify-content-center flex-wrap">
                <Card title="Ração para Cachorro" text="A melhor ração para o seu cachorro" alt="ração para cachorro" img_link="https://images-americanas.b2w.io/produtos/4088320278/imagens/racao-para-cachorro-pedigree-racas-pequenas-10-1kg/4088320278_1_large.jpg" />
                <Card title="Ração para Gato" text="A melhor ração para o seu gato" alt="ração para gato" img_link="https://cdn.awsli.com.br/600x450/1226/1226108/produto/135511161/9f649190c9.jpg" />
                <Card title="Ração para Coelho" text="A melhor ração para o seu coelho" alt="ração para coelho" img_link="https://a-static.mlcdn.com.br/450x450/racao-comigo-para-coelhos-5kg/villaspetagro/afef7836bd6611ebb1844201ac18500e/edc97c73ddea18d2cb6fd1841e026b62.jpeg" />
            </div>

            <div className="d-flex justify-content-center">
             <button className="btn btn-primary text-center">Conheça Agora</button>
            </div>

            <div className="d-flex flex-column align-items-center my-5 mx-4">
                <h1 className="text-center">Baixe o App Agora!</h1>
                <div className="d-flex flex-row justify-content-center align-items-center">
                <img className="w-25 mx-3 my-5" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/1024px-Google_Play_2022_logo.svg.png" />
                <img className="w-25" alt="" src="https://www.cotacao.com.br/wp-content/uploads/2018/02/app-store-logo.png" />
                </div>
            </div>

            <Newsletter />

            <Footer />
        </>
    )
}