import React from "react";
import "./styles.scss";

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

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
                    <li>
                        <a href="javascript:void(0);" className="icon" onClickCapture="myFunction()">
                            <i className="fa fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>
);

export default Nav;
