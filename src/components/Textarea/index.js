import React, {Component} from 'react';
import './styles.scss';

class Textarea extends Component {

    componentDidMount() {
        const $input = document.querySelector(`#${this.props.id}`);
        console.log(this.props.required);
        if (this.props.required) {
            $input.setAttribute('required', 'required');
        }
    }

    render() {

        return (
            <>
                <label htmlFor={this.props.id}>{this.props.children}</label>

                <textarea id={this.props.id}
                          name={this.props.id}
                          className={this.props.classes}
                          placeholder={this.props.placeholder}
                          value={this.props.value}
                          rows={this.props.rows}
                > </textarea>
            </>
        );
    }

}

export default Textarea;
