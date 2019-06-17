import React, {Fragment} from "react";
import "./styles.scss";
import Nav from "../../components/Nav";
import ScrollAnimation from 'react-animate-on-scroll';
import ChangeColor from "../../components/ChangeColor";
import Works from "../../components/Works";
import Form from "../../components/Form";


const Main = () => {
    return (
        <Fragment>
            <Nav/>

            <ScrollAnimation animateIn="fadeIn" duration="2">
                <section id="about-me" className="flex nowrap center-all">
                    {/*<img src="/assets/imgs/me.JPG" alt="Foto do Felipe Seolin Bento"/>*/}
                    <div className="photo"></div>
                    <div>

                        <h1 className="font-blue-lagoon">Felipe Seolin Bento</h1>

                        <p>
                            Eu sou um aluno de Engenharia de Software na Universidade Tecnológica Federal do Paraná,
                            câmpus
                            Cornélio Procópio e este é o meu portfólio, fique a vontade de ver e conhecer um pouco mais
                            sobre mim e sobre o meu trabalho.
                            É importante ressaltar que esta página está sempre em construção!
                        </p>
                        <p>
                            Se desejar baixar meu currículo (CV) é só clicar
                            <a href="/assets/pdf/CV.pdf" target="_blank"> aqui</a>.
                        </p>
                    </div>

                </section>
            </ScrollAnimation>

            <section id="details">
                <h2 className="font-teal">Detalhes</h2>
                <p className="description">
                    Aqui estão algumas informações a respeito de meus interesses, idiomas, formação e atividades
                    desenvolvidas.
                </p>
                <div id="interests">
                    <h3 className="font-green-haze">Interesses</h3>
                    <p className="description">Estes são alguns dos interesses que eu possuo atualmente:</p>
                    <ul className="flex">
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
                    <ul className="flex">
                        <li>Italiano</li>
                        <li>Francês</li>
                        <li>Alemão</li>
                    </ul>
                </div>

                <div id="formation">
                    <h3 className="font-green-haze">Formação</h3>

                    <h4>
                        UTFPR - Universidade Tecnológica Federal do Parana
                    </h4>
                    <p>2017 - atualmente</p>
                    <p>
                        Cursando bacharelado em Engenharia de Software, com previsao de termino para 2020.
                    </p>

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

            <section id="skills" className="green-haze font-white">
                <h2>Habilidades</h2>
                <p className="description">Abaixo estão listadas algumas de minhas habilidades.</p>

                <ul className="flex center">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Angular 7</li>
                    <li>React JS</li>
                    <li>Node</li>
                    <li>PHP</li>
                    <li>Laravel</li>
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Heroku</li>
                    <li>Github</li>
                    <li>Gitlab</li>
                    <li>Bitbucket</li>
                    <li>Scrum</li>
                    <li>Kanban</li>
                    <li>Engenharia de Software</li>
                    <li>Java</li>
                    <li>Linguagem C</li>
                    <li>Photoshop</li>
                    <li>Illustrator</li>
                    <li>Corel Draw</li>
                    <li>Comunicação</li>
                    <li>Liderança em Projetos</li>
                </ul>
            </section>

            <section id="blog">
                <h2 className="font-teal">Blog</h2>
            </section>

            <Works/>

            <section id="more" className="teal font-white">
                <h2>Maiores Informações</h2>
                <p className="description">Saiba mais a respeito da minha biografia e do meu contato com a profissão</p>

                <div id="biography">
                    <h3>Biografia</h3>
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
                    <h3>Contato com a profisão</h3>

                    <h4>Design Gráfico / WebDesign</h4>
                    <p>
                        O primeiro contato profissional que possui foi com a área de design gráfico, já realizando
                        algusn trabalhos independentes. Atualmente faço menos trabalhos deste tipo, porém
                        continuo me interessando muito por esta área e gostaria de aperfeiçoar meus conhecimentos.
                        Isso foi possível graças a um curso profissionalizante de WebDesign onde aprendi
                        <span className="bold"> Photoshop, Corel Draw, Dreamweaver e Flash</span>.
                    </p>

                    <h4>Estágio em Desenvolvimento Web Full Stack</h4>
                    <p>
                        Em maio de 2018 ingressei no estágio de desenvolvimento web na UTFPR, o qual eu estou até hoje.
                        O estágio é focado em desenvolver sistemas para o próprio uso da universidade, sendo assim
                        fiz o uso de <span className="bold">PHP, PostgreSQL, HTML 5, CSS 3, JavaScript, Bootstrap,
                        Jquery, Angular 7</span>, entre outras tecnologias.
                    </p>
                </div>
            </section>

            <section id="contacts">
                <h2 className="font-teal">Fale comigo</h2>
                <p className="description">Sinta-se a vontade de puxar assunto comigo</p>

                <div className="flex row">
                    <div id="social-media" className="flex flex-column">
                        <h3 className="font-green-haze">Redes Sociais</h3>

                        <div className="flex">
                            <a href="https://www.facebook.com/felipe.seolinbento" target="_blank">
                                <img src="/assets/icons/facebook.svg" alt="Facebook"/>
                            </a>

                            <a href="https://www.instagram.com/felipesebe" target="_blank">
                                <img src="/assets/icons/instagram.svg" alt="Instagram"/>
                            </a>

                            <a href="https://github.com/felipeseolin" target="_blank">
                                <img src="/assets/icons/github.svg" alt="Github"/>
                            </a>

                            <a href="https://www.linkedin.com/in/felipe-seolin-bento-55a915152" target="_blank">
                                <img src="/assets/icons/linkedin.svg" alt="LinkedIn"/>
                            </a>

                            <a href="mailto:bentof@alunos.utfpr.edu.br" title="Email Institucional">
                                <img src="/assets/icons/mail.svg" alt="Email Institucional"/>
                            </a>

                            <a href="mailto:felipe.seolin@hotmail.com" title="Email Pessoal">
                                <img src="/assets/icons/outlook.svg" alt="Email Pessoal"/>
                            </a>

                            <a href="phone:+5544998483634">
                                <img src="/assets/icons/whatsapp.svg" alt="WhatsApp"/>
                            </a>
                        </div>
                    </div>

                    <Form/>
                </div>
            </section>

            <footer className="flex center-all flex-column blue-lagoon font-white">
                <h3>Felipe Seolin Bento</h3>
                <p>
                    <a className="font-white" href="phone:+5544998483634">
                         +55 (44) 99848-3634
                    </a>
                </p>
                <p>
                    <a className="font-white bold" href="mailto:felipe.seolin@hotmail.com">
                        felipe.seolin@hotmail.com
                    </a>
                </p>
                <p>
                    <a className="font-white bold" href="mailto:bentof@alunos.utfpr.edu.br">
                        bentof@alunos.utfpr.edu.br
                    </a>
                </p>
            </footer>

            <ChangeColor/>
        </Fragment>
    );
};

export default Main;
