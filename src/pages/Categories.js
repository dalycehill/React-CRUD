import React from 'react';
import api from '../api';
import CategoryAForm from '../components/CategoryAForm';
import CategoryEForm from '../components/CategoryEForm';
import CategoryTable from '../components/CategoryTable';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      entries: [],
      editingCategory: null
    };
  }

  componentDidMount() {
    //fetch items for server 
    api
      .fetchCategory()
      .then(results => {
        this.setState({
          entries: results.data.categories
        });
      })
      .catch(error => {
        console.log('Something went wrong...')
      });
  }

  _addEntry = entry => {
    api
      .addCategory(entry)
      .then(results => {
        this.setState({
          entries: [...this.state.entries, results.data.category]
        });
      })
      .catch(error => {
        console.log('Failed to add category...');
      });
  };

  _editEntry = entry => {
    this.setState({
        editingCategory: entry
    });
  };

  _updateEntry = entry => {
    api
      .updateCategory(entry)
      .then(() => {
        //update entries
        //return new entry where id matches one being edited
        this.setState({
          editingCategory: null,
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
        console.log('Failed to update category...');
      });
  };

  _deleteEntry = entry => {
    api
      .deleteCategory(entry)
      .then(() => {
        //filter entries where ids dont match one being deleted
        this.setState({
          entries: [...this.state.entries].filter(i => i.id !== entry.id)
        });
      })
      .catch(error => {
        console.log('Failed to delete category...');
      });
  };

  render() {
    return(
      <div className="App">
        <CategoryAForm editing={this.state.editingCategory} onAddEntry={this._addEntry} />
        {this.state.editingCategory ? (<CategoryEForm editing={this.state.editingCategory} onUpdateEntry={this._updateEntry} />) : null }

        <CategoryTable entries={this.state.entries} onEditCategory={this._editEntry} onDeleteCategory={this._deleteEntry} />
      </div>
    );
  }

}

export default Categories;
