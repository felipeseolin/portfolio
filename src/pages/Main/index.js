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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci delectus dolorem
                        dolores eos facilis ipsa, maxime neque nobis perferendis placeat quo sint, suscipit tempora
                        voluptatem voluptates! Culpa, facere.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci delectus dolorem
                        dolores eos facilis ipsa, maxime neque nobis perferendis placeat quo sint, suscipit tempora
                        voluptatem voluptates! Culpa, facere.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci delectus dolorem
                        dolores eos facilis ipsa, maxime neque nobis perferendis placeat quo sint, suscipit tempora
                        voluptatem voluptates! Culpa, facere.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci delectus dolorem
                        dolores eos facilis ipsa, maxime neque nobis perferendis placeat quo sint, suscipit tempora
                        voluptatem voluptates! Culpa, facere.</p>

                    <a href="https://google.com">Baixe meu currículo aqui</a>
                </div>
            </section>

            <section id="details">
                <div id="interests"></div>

                <div id="languages"></div>

                <div id="formation"></div>

                <div id="developed-activities"></div>
            </section>

            <section id="skills">

            </section>

            <section id="blog"></section>

            <section id="works"></section>

            <section id="more">
                <div id="biography"></div>
                <div id="work-review"></div>
            </section>

            <section id="contacts">
                <div id="social-media"></div>
                <div id="form"></div>
            </section>

            <footer></footer>
        </Fragment>
    );
};

export default Main;
