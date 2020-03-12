import React, {Component} from 'react';

class ItemTable extends Component {
    render() {
        return(
            <table style={{marginTop:16}} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Sku</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.entries.map((entry, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{entry.category_id}</td>
                        <td>{entry.title}</td>
                        <td>{entry.description}</td>
                        <td>{entry.price}</td>
                        <td>{entry.quantity}</td>
                        <td>{entry.sku}</td>
                        <td>
                        <button onClick={() => this.props.onEditItem(entry)}>Edit</button>
                        <button onClick={() => this.props.onDeleteItem(entry)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default ItemTable;