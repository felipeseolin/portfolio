import React, {Fragment} from "react";
import "./styles.scss";
import Nav from "../../components/Nav";

import ChangeColor from "../../components/ChangeColor";
import Works from "../../components/Works";
import Form from "../../components/Form";
import BlogPreview from "../../components/BlogPreview";
import Home from "../../components/Home";
import Details from "../../components/Details";
import Skills from "../../components/Skills";
import Section from "../../components/Section";
import MoreInfo from "../../components/MoreInfo";
import Contacts from "../../components/Contacts";
import Footer from "../../components/Footer";


const Main = () => {
    return (
        <Fragment>
            <Nav/>

            <Home />

            <Details/>

            <Skills/>

            <Section
                idSec="blog"
                classes="section"
                title="Blog"
            >
                <BlogPreview
                    title="Processo de Software"
                    text="Gostaria de comentar um pouco sobre um trabalho que estou desenvolvendo.
                    "
                    link="/blog/1"
                />
                <BlogPreview
                    title="Processo de Software"
                    text="Gostaria de comentar um pouco sobre um trabalho que estou desenvolvendo.
                    "
                    link="/blog/2"
                />
                <BlogPreview
                    title="Processo de Software"
                    text="Gostaria de comentar um pouco sobre um trabalho que estou desenvolvendo.
                    "
                    link="/blog/3"
                />
            </Section>

            <Works/>

            <MoreInfo/>

            <Contacts/>

           <Footer/>

            <ChangeColor/>
        </Fragment>
    );
};

export default Main;
