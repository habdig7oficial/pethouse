import Logo from "./logo";

import Mastodon from "bootstrap-icons/icons/mastodon.svg"
import Email from "bootstrap-icons/icons/envelope-at-fill.svg"
import Git from "bootstrap-icons/icons/git.svg"

let img_width = "2.5rem"

export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 my-4 px-1 border-top text-bg-secondary">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <Logo />
                    </a>
                    <span className="mb-3 mb-md-0 text-bg-secondary">Copyright © Mateus Felipe da Silveira Vieira 2023 PetHouse</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-3">
                    <li className="ms-3"><img style={{width:img_width}} src={Mastodon}></img></li>
                    <li className="ms-3"><img style={{width:img_width}} src={Email}></img></li>    
                    <li className="ms-3"><img style={{width:img_width}} src={Git}></img></li>    
                </ul>
            </footer>
        </>
    )
}