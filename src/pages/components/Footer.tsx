import Logo from "./logo";

import Mastodon from "bootstrap-icons/icons/mastodon.svg"
import Email from "bootstrap-icons/icons/envelope-at-fill.svg"

let img_width = "5rem"

export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <Logo />
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">Copyright © Mateus Felipe da Silveira Vieira 2023 PetHouse</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-3">
                    <li className="ms-3"><img className="w-100" src={Mastodon}></img></li>
                    <li className="ms-3"><img src={Email}></img></li>    
                </ul>
            </footer>
        </>
    )
}