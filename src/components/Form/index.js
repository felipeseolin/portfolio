import React from 'react';
import './styles.scss';

const Form = () => (
    <>
        <div id="form" className="flex flex-column">
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
    </>
);

export default Form;
