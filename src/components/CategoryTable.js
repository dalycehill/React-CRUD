import React, {Component} from 'react';

class CategoryTable extends Component {
    render() {
        return(
            <table style={{marginTop:16}} border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.entries.map((entry, index) => (
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{entry.category}</td>
                        <td>
                        <button onClick={() => this.props.onEditCategory(entry)}>Edit</button>
                        <button onClick={() => this.props.onDeleteCategory(entry)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default CategoryTable;