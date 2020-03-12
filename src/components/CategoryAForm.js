import React, {Component} from 'react';
import Button from './Button';

class CategoryAForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: ''
        };
    }

    _handleTextChange = (key, value) => {
        this.setState({
            [key]: value
        });
    };

    _add = () => {
        this.props.onAddEntry(this.state);
        this._clear();
    };

    _clear = () => {
        this.setState({
            category: ''
        });
    };

    render() {
        return(
            <div>
                <input type="text" 
                        placeholder="Category" 
                        value={this.state.category} 
                        onChange={event => this._handleTextChange('category', event.target.value)}
                />
            <br/>
            <Button title="Add Entry" onClick={this._add} />
            <br/>
            </div>
        );
    }
}

export default CategoryAForm;