import React, {Fragment} from "react";
import "./styles.scss";
import Nav from "../../components/Nav";

const Main = () => {
    return (
        <Fragment>
            <Nav/>

            <section id="home" className="hero flex center-all blue-lagoon">
                <h1>Talvez vai alguma frase</h1>
            </section>

            <section id="about-me" className="flex nowrap center-all">
                <img src="https://picsum.photos/id/565/500/500" alt="Foto do Felipe Seolin Bento"/>
                <div>
                    <h1>Felipe Seolin Bento</h1>
                    <p>
                        Eu sou um aluno de Engenharia de Software na Universidade Tecnológica Federal do Paraná, câmpus
                        Cornélio Procópio.
                    </p>
                    <a href="https://google.com">Baixe meu currículo aqui</a>
                </div>
            </section>

            <section id="details">
                <h2>Detalhes</h2>
                <div id="interests">
                    <h3>Interesses</h3>
                    <ul>
                        <li>Desenvolvimento Web</li>
                        <li>Web Design</li>
                        <li>Design Grafico</li>
                        <li>Processamento de Imagens</li>
                        <li>Inteligencia Artificial</li>
                    </ul>
                </div>

                <div id="languages">
                    <h3>Linguas Estrangeiras</h3>
                    <p>
                        Eu sempre me interessei muito em aprender outras linguas e desejo aprender muitas outras!
                        Atulamente alem do <span className="bold">portugues</span> que tenho como lingua nativa,
                        possuo o <span className="bold">espanhol</span> em nivel intermediario e o <span
                        className="bold">
                        ingles</span> em nivel avançado, sendo que para este ultimo possuo mais de sete anos de curso
                        no CCAA finalizando no nivel master.
                    </p>
                    <p>Gostaria de aprender:</p>
                    <ul>
                        <li>Italiano</li>
                        <li>Frances</li>
                        <li>Alemao</li>
                    </ul>
                </div>

                <div id="formation">
                    <h3>Formaçao</h3>

                    <h4><a href="http://portal.utfpr.edu.br" target="_blank">
                        UTFPR - Universidade Tecnologica Federal do Parana
                    </a></h4>
                    <p>2017 - atualmente</p>
                    <p>Cursando bacharelado em Engenharia de Software</p>

                    <h4>Colegio Passo a Passo</h4>
                    <p>2014 - 2016</p>
                    <p>Ensino Medio completo. Alem disso, neste colegio tambem finalizei o ensino fundamental.</p>
                </div>

                <div id="developed-activities">
                    <h3>Atividade desenvolvidas</h3>
                </div>
            </section>

            <section id="skills">
                <h2>Habilidades</h2>
            </section>

            <section id="blog">
                <h2>Blog</h2>
            </section>

            <section id="works">
                <h2>Trabalhos Realizados</h2>
            </section>

            <section id="more">
                <h2>Maiores Informaçoes</h2>

                <div id="biography">
                    <h3>Biografia</h3>
                    <p>
                        Nascido em 09/04/1999 na cidade de Terra Rica e no estado do Parana, sempre fui alguem
                        muito esforçado e responsavel que procura cada vez mais melhorar a si mesmo
                    </p>
                    <p>
                        Durante alguns anos de minha vida participei ativamente da paroquia da minha cidade, o que
                        considero uma
                    </p>
                    <p>
                        Atualmente estou cursando Engenharia de Software da Universidade Tecnologica Federal do
                        Parana, na cidade de Cornelio Procopio, cheguei por aqui no inicio de 2017
                    </p>
                </div>

                <div id="work-review">
                    <h3>Contato com a profisao</h3>
                </div>
            </section>

            <section id="contacts">
                <h2>Fale comigo</h2>

                <div id="social-media">
                    <h3>Redes Sociais</h3>
                </div>
                <div id="form">
                    <h3>Formulario</h3>

                    <form action="">

                        <label htmlFor="name">Nome</label>
                        <input id="name" name="name" type="text"/>

                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email"/>

                        <label htmlFor="">Assunto</label>
                        <input id="" name="" type="text"/>

                        <label htmlFor="message">Mensagem</label>
                        <textarea id="message" name="message" rows="10"></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </section>

            <footer>
                Rodape
            </footer>
        </Fragment>
    );
};

export default Main;
