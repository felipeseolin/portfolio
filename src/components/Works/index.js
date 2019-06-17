import React from "react";
import './styles.scss';

const Works = () => (
    <>
        <section id="works">
            <h2 className="font-teal">Trabalhos Desenvolvidos</h2>
            <p className="description">
                Aqui estão alguns dos trabalhos que já desenvolvi e também os que estou desenvolvendo.
            </p>

            <h3>Websites</h3>
            <p>
                No meu estágio tive a oportunidade de trabalhar com alguns sistemas Web para a universidade e também
                já me aventurei fazendo alguns sites.
            </p>
            <div className="flex center flex-space-evenly works-imgs">
                <a href="https://apoio.cp.utfpr.edu.br/Intranet/" target="_blank">
                    <img src="/assets/imgs/apoio.png" alt="Sistemas de Apoio ao Câmpus"/>
                </a>
                <a href="https://apoio.cp.utfpr.edu.br/apptv/" target="_blank">
                    <img src="/assets/imgs/tv.png" alt="TV do Câmpus"/>
                </a>
                <a href="https://felipeseolin.github.io/abrindo-portas/" target="_blank">
                    <img src="/assets/imgs/abrindo-portas.png" alt="Abrindo Portas"/>
                </a>
            </div>

            <h3>Design Gráfico</h3>
            <p>
                Com Design Gráfico sempre realizei trabalhos sem intenções lucrativas. Já fiz trabalhos para projetos
                da universidade, igrejas e entre outros.
            </p>

        </section>
    </>
);
export default Works;
