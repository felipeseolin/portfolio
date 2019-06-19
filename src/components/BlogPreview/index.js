import React, {Component} from 'react';
import './styles.scss';

class BlogPreview extends Component {

    state = {
      imgPath: 'true'
    };

    componentDidMount() {
        const imgPath = this.props.imgPath;
        const style = "background-image: ";

        if (imgPath) {
            this.setState({imgPath: style + this.props.imgPath});
        }
    }

    render() {
        return (
            <>
                <div className="blogPreview">
                    <a href={this.props.link} className="flex flex-column font-white">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.text}</p>
                    </a>
                </div>
            </>
        );
    }
}

export default BlogPreview;
