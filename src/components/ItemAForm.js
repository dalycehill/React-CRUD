import React, {Component} from 'react';
import Button from './Button';

class ItemAForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category_id: 1,
            title: '',
            description: '',
            price: '',
            quantity: '',
            sku: ''
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
            category_id: 1,
            title: '',
            description: '',
            price: '',
            quantity: '',
            sku: ''
        });
    };

    render() {
        let optionItems = this.props.cats.map((cat) =>
            <option key={cat.id} value={cat.id}>{cat.category}</option>
        );

        return(
            <div>
                <select value={this.state.category_id} onChange={event => this._handleTextChange('category_id', event.target.value)}>
                    {optionItems}
                </select>
                <br/>
                <input type="text" 
                        placeholder="Title" 
                        value={this.state.title} 
                        onChange={event => this._handleTextChange('title', event.target.value)}
                />
                <br/>
                <input type="text" 
                        placeholder="Description" 
                        value={this.state.description} 
                        onChange={event => this._handleTextChange('description', event.target.value)}
                />
                <br/>
                <input type="text" 
                        placeholder="Price" 
                        value={this.state.price} 
                        onChange={event => this._handleTextChange('price', event.target.value)}
                />
                <br/>
                <input type="number" 
                        placeholder="Quantity" 
                        value={this.state.quantity} 
                        onChange={event => this._handleTextChange('quantity', event.target.value)}
                />
                <br/>
                <input type="text" 
                        placeholder="Sku" 
                        value={this.state.sku} 
                        onChange={event => this._handleTextChange('sku', event.target.value)}
                />
            <br/>
            <Button title="Add Entry" onClick={this._add} />
            <br/>
            </div>
        );
    }
}

export default ItemAForm;