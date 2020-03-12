import React from 'react';
import api from '../api';
import ItemAForm from '../components/ItemAForm';
import ItemEForm from '../components/ItemEForm';
import ItemTable from '../components/ItemTable';

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      cats: [],
      editingItem: null
    };
  }

  componentDidMount() {
    //fetch items for server 
    api
      .fetchItem()
      .then(results => {
        this.setState({
          entries: results.data.items
        });
      })
      .catch(error => {
        console.log('Something went wrong...')
      });

      api
      .fetchCategory()
      .then(results => {
        this.setState({
          cats: results.data.categories
        });
      })
      .catch(error => {
        console.log('Something went wrong...')
      });
  }

  _addEntry = entry => {
    api
      .addItem(entry)
      .then(results => {
        this.setState({
          entries: [...this.state.entries, results.data.item]
        });
      })
      .catch(error => {
        console.log('Failed to add item...');
      });
  };

  _editEntry = entry => {
    this.setState({
        editingItem: entry
    });
  };

  _updateEntry = entry => {
    api
      .updateItem(entry)
      .then(() => {
        //update entries
        //return new entry where id matches one being edited
        this.setState({
          editingItem: null,
          entries: [...this.state.entries].map(i => {
            if (i.id === entry.id) {
              return entry;
            } else {
              return i;
            }
          })
        });
      })
      .catch(error => {
        console.log('Failed to update item...');
      });

      api
      .fetchCategory()
      .then(results => {
        this.setState({
          cats: results.data.categories
        });
      })
      .catch(error => {
        console.log('Something went wrong...')
      });
  };

  _deleteEntry = entry => {
    api
      .deleteItem(entry)
      .then(() => {
        //filter entries where ids dont match one being deleted
        this.setState({
          entries: [...this.state.entries].filter(i => i.id !== entry.id)
        });
      })
      .catch(error => {
        console.log('Failed to delete item...');
      });
  };

  render() {
    return(
      <div className="App">
        <ItemAForm cats={this.state.cats} editing={this.state.editingItem} onAddEntry={this._addEntry} />
        {this.state.editingItem ? (<ItemEForm cats={this.state.cats} editing={this.state.editingItem} onUpdateEntry={this._updateEntry} />) : null }

        <ItemTable entries={this.state.entries} onEditItem={this._editEntry} onDeleteItem={this._deleteEntry} />
      </div>
    );
  }

}

export default Items;