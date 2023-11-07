import petlogo from "../../assets/Images/pethouse-logo.svg"


export default function Navbar() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center bg-light ">
                <div className="d-flex justify-content-center align-items-center flex-column my-2">
                    <img className="mx-auto" style={{ maxWidth: "3rem"}} src={petlogo} />
                    <p className="text-center">PetHouse</p>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">PetHouse</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 ">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Entrar
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="/entrar">Entrar</a></li>
                                    <li><a className="dropdown-item" href="/casastrar">Cadastre-se</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Cadastrar Produtos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

/**style={{position: "fixed", left:"50%", right:"50%", translate: "translate(-50%, 0)"}}  */