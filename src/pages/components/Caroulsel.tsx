export default function Caroulsel() {
    return (
        <>
            <div className="d-flex justify-content-center">
                <div style={{ width: "60%" }} id="carouselExample" className="carousel slide " data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://blog-static.petlove.com.br/wp-content/uploads/2022/11/30161259/racao-para-cachorro-escolher-Petlove.jpg" className="d-block w-100" alt="Cachorro" />
                        </div>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Lorem</h5>
                            <p>Ipsum</p>
                        </div>

                        <div className="carousel-item">
                            <img src="https://nutricaoesaudeanimal.com.br/wp-content/uploads/2019/07/295782-veja-como-deve-ser-a-racao-adequada-para-filhote-de-gato-780x450.jpg" className="d-block w-100" alt="Gato" />
                        </div>

                        <div className="carousel-item">
                            <img src="https://t2.ea.ltmcdn.com/pt/posts/7/0/0/quantidade_diaria_de_comida_para_coelhos_24007_orig.jpg" className="d-block w-100" alt="Coelho" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}