import React from 'react';
import './styles.scss';
import Section from "../Section";
import SubSection from "../SubSection";
import List from "../List";

const Details = () => (
    <>
        <Section
            idSec="details"
            classes="section"
            title="Detalhes"
            description="Aqui estão algumas informações a respeito de meus interesses, idiomas, formação e atividades
                desenvolvidas."
        >
            <SubSection
                idSubSec="interests"
                title="Interesses"
                description="Estes são alguns dos interesses que eu possuo atualmente:"
            >
                <List classes="list flex center-all">
                    <li>Desenvolvimento Web</li>
                    <li>Web Design</li>
                    <li>Design Gráfico</li>
                    <li>Processamento Digital de Imagens</li>
                    <li>Inteligência Artificial</li>
                </List>
            </SubSection>

            <SubSection
                idSubSec="languages"
                title="Línguas Estrangeiras"
            >

                <p>
                    Eu sempre me interessei muito em aprender outras línguas e desejo aprender muitas outras!
                    Atualmente além do <span className="bold">português</span> que tenho como lingua nativa,
                    possuo o <span className="bold">español</span> em nível intermediário e o <span
                    className="bold">english</span> em nível avançado, sendo que para este ultimo possuo mais de
                    sete anos de curso no CCAA finalizando no nível master.
                </p>
                <p>Como já disse gostaria de aprender novos idiomas entre eles estão:</p>
                <List classes="flex list">
                    <li>Italiano</li>
                    <li>Francês</li>
                    <li>Alemão</li>
                </List>

            </SubSection>

            <SubSection
                idSubSec="formation"
                title="Formação"
            >
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
            </SubSection>

            <SubSection
                idSubSec="developed-activities"
                title="Atividades desenvolvidas"
            >
                <p>
                    Aqui estão listados alguns projetos que eu já fiz parte, sendo próprios ou em grupo, outros
                    que eu estou desenvolvendo e alguns que tenho interesse em desenvolver.
                </p>
            </SubSection>

        </Section>
    </>
);

export default Details;
