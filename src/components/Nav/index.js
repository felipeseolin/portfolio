import React from "react";
import "./styles.scss";

const Nav = () => (
    <>
        <nav>

            <div className="collapse navbar-collapse" id="conteudoNavbarSuportado">
                <ul className="flex flex-space-evenly">
                    <li>
                        <a href="#">Início</a>
                    </li>
                    <li>
                        <a href="#">Detalhes</a>
                    </li>
                    <li>
                        <a href="">Habilidades</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Meus trabalhos</a>
                    </li>
                    <li>
                        <a href="">Mais Informações</a>
                    </li>
                    <li>
                        <a href="">Contatos</a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
);

export default Nav;
