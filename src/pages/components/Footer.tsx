import Logo from "./logo";

import Mastodon from "bootstrap-icons/icons/mastodon.svg"
import Email from "bootstrap-icons/icons/envelope-at-fill.svg"
import Git from "bootstrap-icons/icons/git.svg"

let img_width = "2.5rem"

export default function Footer() {
    return (
        <>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 mt-4 px-1 border-top text-bg-secondary ">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <Logo />
                    </a>
                    <span className="mb-3 mb-md-0 text-bg-secondary">Copyright © Mateus Felipe da Silveira Vieira 2023 PetHouse</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-3">
                    <li className="ms-3"><a target="_blank" href="https://mastodon.social/@rms@mastodon.xyz"><img style={{width:img_width}} src={Mastodon} /></a></li>
                    <li className="ms-3"><a target="_blank" href="mailto:habdig7@gmail.com"><img style={{width:img_width}} src={Email} /></a></li>    
                    <li className="ms-3"><a target="_blank" href="https://github.com/habdig7oficial/pethouse"><img style={{width:img_width}} src={Git} /></a></li>    
                </ul>
            </footer>
        </>
    )
}