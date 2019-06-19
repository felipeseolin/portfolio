import React from 'react';
import './styles.scss';
import Section from "../Section";
import Form from "../Form";

const Contacts = () => (
    <>
        <Section
            idSec="contacts"
            classes="section"
            title="Fale comigo"
            description="Sinta-se a vontade de puxar assunto comigo"
        >
            <div className="flex row">
                <div id="social-media" className="flex flex-column">
                    <h3 className="font-green-haze">Redes Sociais</h3>

                    <div className="flex center-all">
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
        </Section>
    </>
);

export default Contacts;