import React from "react";
import "./styles.scss";

const Nav = () => (
    <>
        <nav>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="flex flex-start">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Desativado</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
);

export default Nav;
