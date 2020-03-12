import React, {Component} from 'react';
import Button from './Button';

class CategoryEForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...props.editing
        };
    }

    _handleTextChange = (key, value) => {
        this.setState({
            [key]: value
        });
    };

    _update = () => {
        this.props.onUpdateEntry(this.state);
        this._clear();
    };

    _clear = () => {
        this.setState({
            id: null,
            category: ''
        });
    };

    render() {
        return(
            <div>
                <br/>
                <input type="text" 
                        placeholder="Category" 
                        value={this.state.category} 
                        onChange={event => this._handleTextChange('category', event.target.value)}
                />
                <br/>
                <Button title="Update" onClick={this._update} />
                <br/>
            </div>
        );
    }

}

export default CategoryEForm;