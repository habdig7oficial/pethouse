import petlogo from "../../assets/Images/pethouse-logo.svg"


export default function Navbar() {
    return (
        <>
            <div className="bg-secondary">
                <div className="d-flex justify-content-center align-items-center text-bg-secondary my-0">
                    <a href="/" className="d-flex justify-content-center align-items-center flex-column my-2">
                        <img className="mx-auto" style={{ maxWidth: "3rem" }} src={petlogo} />
                        <p style={{textDecoration: "none"}} className="text-center text-decoration-none text-light">PetHouse</p>
                    </a>
                </div>

                <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2 text-bg-secondary my-0 p-0">
                    <div className="container-fluid text-bg-secondary my-0">
                        <a className="navbar-brand text-bg-secondary" href="/">PetHouse</a>
                        <button className="navbar-toggler mb-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 my-0">

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle text-bg-secondary" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Entrar
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="/entrar">Entrar</a></li>
                                        <li><a className="dropdown-item" href="/casastrar">Cadastre-se</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active text-bg-secondary" aria-current="page" href="/produtos">Cadastrar Produtos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

/**style={{position: "fixed", left:"50%", right:"50%", translate: "translate(-50%, 0)"}}  */