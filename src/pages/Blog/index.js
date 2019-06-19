import React, {Component} from 'react';
import './styles.scss';
import Section from "../../components/Section";

class Blog extends Component {
    state = {
        id: 0,
        title: 'título',
        text: 'texto',
    };

    componentDidMount() {
        const param = this.props.match.params.id;
        this.setState({id: param});

        switch (param) {
            case '1':
                this.setState({
                    title: 'Enge'
                });
                this.setState({
                    text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et nunc fermentum,' +
                        'interdum neque in, scelerisque ante. Integer consequat leo sed orci vehicula, sit amet varius ' +
                        'ante hendrerit. Quisque sodales orci eu pretium tincidunt. Praesent elit turpis, pulvinar at ' +
                        'dictum eu, pellentesque placerat lectus. Maecenas eget diam gravida, tincidunt ex id, commodo ' +
                        'ipsum. Pellentesque vehicula in ipsum sit amet tincidunt. In vitae nibh nec massa lobortis ' +
                        'euismod.\n' +
                        '\n' +
                        'Sed porta, nulla id tincidunt porta, erat nunc placerat enim, in bibendum turpis lorem non ' +
                        'massa. Ut ac erat at dui maximus facilisis. Nunc sed lobortis ante. Donec feugiat quam in ' +
                        'justo molestie, vitae ultricies lorem condimentum. Vivamus scelerisque mollis urna, ut ' +
                        'vestibulum quam commodo eu. Nunc euismod facilisis semper. Vivamus non facilisis urna. Ut ' +
                        'tempor egestas sodales. Donec tortor augue, aliquam id velit posuere, bibendum vehicula leo. ' +
                        'Vestibulum posuere dui in quam feugiat porta. Morbi eget nunc est.\n' +
                        '\n' +
                        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; ' +
                        'Curabitur est est, pellentesque ac accumsan ac, venenatis sodales dolor. In in nunc vitae ' +
                        'nulla maximus bibendum tempor et nibh. Donec finibus lobortis nisl. Integer posuere erat ' +
                        'enim, et accumsan nisl interdum ut. Sed lobortis scelerisque mi, eget aliquam diam fermentum ' +
                        'a. Suspendisse faucibus dictum nunc id pretium. Suspendisse ac pretium libero. Aliquam mi ' +
                        'lacus, aliquet a elit ut, tempor aliquam leo. Donec eleifend a ante non porta. Phasellus ' +
                        'vel condimentum velit, sed ultrices justo. '
                });
                break;

            default:
                this.setState({
                    title: 'Erro 404'
                });
                this.setState({
                    text: 'Não existe nenhum post neste endereço'
                });
                break;
        }
    }

    render() {
        return (
            <>
                <div className="flex flex-column section">
                    <a href="/">Voltar para a página principal</a>
                    <h1 className="font-blue-lagoon">Blog</h1>

                    <Section
                        title={this.state.title}
                    >
                        <p>{this.state.text}</p>
                    </Section>


                </div>
            </>
        );
    }

}

export default Blog;
