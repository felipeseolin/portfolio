import React from 'react';
import './styles.scss';

const Form = () => (
    <>
        <div id="form" className="flex flex-column">
            <h3 className="font-green-haze">Formulário</h3>

            <form action="https://formspree.io/felipe.seolin@hotmail.com" method="POST" >

                <label htmlFor="name">Nome *</label>
                <input id="name" name="name" type="text" required/>

                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" required/>

                <label htmlFor="subject">Assunto *</label>
                <input id="subject" name="subject" type="text" required/>

                <label htmlFor="message">Mensagem *</label>
                <textarea id="message" name="message" rows="10" required></textarea>

                <button type="submit">Enviar</button>
            </form>
        </div>
    </>
);

export default Form;
