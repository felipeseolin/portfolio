import React, {Fragment} from "react";
import "./styles.scss";
import Nav from "../../components/Nav";
import ScrollAnimation from 'react-animate-on-scroll';

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
                    <ScrollAnimation animateIn="fadeIn" duration="2">
                        <h1 className="font-blue-lagoon">Felipe Seolin Bento</h1>
                    </ScrollAnimation>
                    <p>
                        Eu sou um aluno de Engenharia de Software na Universidade Tecnológica Federal do Paraná, câmpus
                        Cornélio Procópio e este é o meu portfólio, fique a vontade de ver e conhecer um pouco mais
                        sobre mim e sobre o meu trabalho.
                        É importante ressaltar que esta página está sempre em construção!
                    </p>
                    <p>
                        Se desejar baixar meu currículo (CV) é só clicar <a href="https://google.com"> aqui</a>.
                    </p>
                </div>

            </section>

            <section id="details">
                <h2 className="font-teal">Detalhes</h2>
                <p className="description">
                    Aqui estão algumas informações a respeito de meus interesses, idiomas, formação e atividades
                    desenvolvidas.
                </p>
                <div id="interests">
                    <h3 className="font-green-haze">Interesses</h3>
                    <p>Estes são alguns dos interesses que eu possuo atualmente:</p>
                    <ul>
                        <li>Desenvolvimento Web</li>
                        <li>Web Design</li>
                        <li>Design Gráfico</li>
                        <li>Processamento Digital de Imagens</li>
                        <li>Inteligência Artificial</li>
                    </ul>
                </div>

                <div id="languages">
                    <h3 className="font-green-haze">Línguas Estrangeiras</h3>
                    <p>
                        Eu sempre me interessei muito em aprender outras línguas e desejo aprender muitas outras!
                        Atualmente além do <span className="bold">português</span> que tenho como lingua nativa,
                        possuo o <span className="bold">español</span> em nível intermediário e o <span
                        className="bold">english</span> em nível avançado, sendo que para este ultimo possuo mais de
                        sete anos de curso no CCAA finalizando no nível master.
                    </p>
                    <p>Como já disse gostaria de aprender novos idiomas entre eles estão:</p>
                    <ul>
                        <li>Italiano</li>
                        <li>Francês</li>
                        <li>Alemão</li>
                    </ul>
                </div>

                <div id="formation">
                    <h3 className="font-green-haze">Formação</h3>

                    <h4><a href="http://portal.utfpr.edu.br" target="_blank">
                        UTFPR - Universidade Tecnológica Federal do Parana
                    </a></h4>
                    <p>2017 - atualmente</p>
                    <p>Cursando bacharelado em Engenharia de Software</p>

                    <h4>Colégio Passo a Passo</h4>
                    <p>2014 - 2016</p>
                    <p>Ensino Médio completo. Além disso, neste colégio também finalizei o ensino fundamental.</p>
                </div>

                <div id="developed-activities">
                    <h3 className="font-green-haze">Atividades desenvolvidas</h3>
                    <p>
                        Aqui estão listados alguns projetos que eu já fiz parte, sendo próprios ou em grupo, outros
                        que eu estou desenvolvendo e alguns que tenho interesse em desenvolver.
                    </p>
                </div>
            </section>

            <section id="skills">
                <h2 className="font-teal">Habilidades</h2>
                <p>Abaixo estão listadas algumas de minhas habilidades:</p>

                <ul>
                    <li>AAAA</li>
                </ul>
            </section>

            <section id="blog">
                <h2 className="font-teal">Blog</h2>
            </section>

            <section id="works">
                <h2 className="font-teal">Trabalhos Desenvolvidos</h2>
            </section>

            <section id="more">
                <h2 className="font-teal">Maiores Informações</h2>
                <p className="description">Saiba mais a respeito da minha biografia e do meu contato com a profissão</p>

                <div id="biography">
                    <h3 className="font-green-haze">Biografia</h3>
                    <p>
                        Nasci em 09 de abril de 1999 na cidade de Terra Rica, estado do Paraná, sempre fui alguém
                        muito esforçado e responsável que procura cada vez mais melhorar a si mesmo.
                    </p>
                    <p>
                        Durante alguns anos de minha vida participei ativamente da paróquia da minha cidade, o que
                        contribuiu muito para o meu desenvolvimento pessoal e interpessoal, melhorando minha comunicação
                        e conhecendo novas pessoas. Neste tempo também estive a frente de movimentos e grupos,
                        desenvolvendo minha liderança.
                    </p>
                    <p>
                        Atualmente estou cursando Engenharia de Software da Universidade Tecnológica Federal do
                        Paraná, na cidade de Cornélio Procópio, cheguei por aqui no início de 2017. Interessei-me
                        por este curso porque sempre gostei de tecnologia, assim como também me atraia mais a parte de
                        software em um computador.
                    </p>
                    <p>
                        Ainda não sei muito o que esperar de meu futuro, porém gostaria de fazer mestrado para tentar
                        ingressar em uma carreira acadêmica. Também gostaria de fazer um intercâmbio e posteriormente
                        ingressar em uma empresa que me incentivasse a aprender novas tecnologias.
                    </p>
                </div>

                <div id="work-review">
                    <h3 className="font-green-haze">Contato com a profisão</h3>

                    <h4>Design Gráfico</h4>
                    <p>
                        O primeiro contato profissional que possui foi com a área de design gráfico, onde realizei
                        alguns trabalhos freelancer na minha cidade. Atualmente faço menos trabalhos deste tipo, porém
                        continuo me interessando muito por esta área e gostaria de aperfeiçoar meus conhecimentos.
                    </p>

                    <h4>Estágio em Desenvolvimento Full Stack Web</h4>
                    <p>
                        Em maio de 2018 ingressei no estágio de desenvolvimento web na UTFPR, o qual eu estou até hoje.
                        O estágio é focado em desenvolver sistemas para o próprio uso da universidade, sendo assim
                        fiz o uso de <span className="bold">PHP, PostgreSQL, HTML 5, CSS 3, JavaScript, Bootstrap,
                        Jquery, Angular 7</span>, entre outros.
                    </p>
                </div>
            </section>

            <section id="contacts">
                <h2 className="font-teal">Fale comigo</h2>
                <p className="description">Sinta-se a vontade de puxar assunto comigo</p>

                <div id="social-media">
                    <h3 className="font-green-haze">Redes Sociais</h3>
                </div>
                <div id="form">
                    <h3 className="font-green-haze">Formulário</h3>

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
                Rodapé
            </footer>

            <div id="color-mode">
                <img src="/assets/imgs/dark.svg" alt="Ativar modo escuro"/>
            </div>
        </Fragment>
    );
};

export default Main;
