import React from 'react';
import './styles.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import Section from "../Section";

const Home = () => (
    <>
        <ScrollAnimation animateIn="fadeIn">
            <Section
                idSec="about-me"
                classes="section flex nowrap center-all"
            >
                <div className="photo"></div>
                <div>
                    <h1 className="font-blue-lagoon">Felipe Seolin Bento</h1>

                    <p>
                        Eu sou um aluno de Engenharia de Software na Universidade Tecnológica Federal do Paraná,
                        câmpus Cornélio Procópio e este é o meu portfólio, fique a vontade de ver e conhecer um
                        pouco mais sobre mim e sobre o meu trabalho. É importante ressaltar que esta página está
                        sempre em construção!
                    </p>

                    <p>
                        Caso desejar visualizar ou baixar meu currículo (CV) é só
                        <a href="/assets/pdf/CV.pdf" target="_blank"> clicar aqui</a>.
                    </p>
                </div>
            </Section>
        </ScrollAnimation>
    </>
);

export default Home;
