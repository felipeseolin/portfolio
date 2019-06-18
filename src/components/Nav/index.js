import React from "react";
import "./styles.scss";

function collapseNav() {
    const $navbar = document.querySelector('#topNavbar');

    if ($navbar.classList.contains('responsive')) {
        $navbar.classList.remove('responsive');
    } else {
        $navbar.classList.add('responsive');
    }
}

const Nav = () => (
    <>
        <nav id="topNavbar" className="topnav font-Oswald">
            <ul>
                <li>
                    <a href="#" className="active font-Oswald uppercase">Felipe Seolin Bento</a>
                </li>
                <li>
                    <a href="#">Início</a>
                </li>
                <li>
                    <a href="#contact">Detalhes</a>
                </li>
                <li>
                    <a href="#about">Habilidades</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="">Trabalhos</a>
                </li>
                <li>
                    <a href="">Informações</a>
                </li>
                <li>
                    <a href="">Fale Comigo</a>
                </li>
                <li>
                    <a href="javascript:void(0);" className="icon" onClick={collapseNav}>&#9776;</a>
                </li>
            </ul>
        </nav>
    </>
);

export default Nav;
