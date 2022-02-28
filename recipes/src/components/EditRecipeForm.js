import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('token');
const reqOps = {
  headers: {
    authorization: token
  }
};

class UpdateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      source: this.props.source,
      ingredients: this.props.ingredients,
      instructions: this.props.instructions,
      category: this.props.category,
      user_id: this.props.user_id
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  updateRecipe() {
    const recipe = {
      title: this.state.title,
      source: this.state.source,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      category: this.state.category,
      user_id: this.state.user_id
    };
    axios
      .put(`http://localhost:5000/api/recipes/${this.props.id}`, recipe, reqOps)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <form onSubmit={this.updateRecipe()}>
          <div className='recipeForm'>
            <div className='recFormSec'>
              <p className='recFormLeft'>Title:</p>
              <input
                type='text'
                name='title'
                value={this.state.title}
                onChange={this.handleChange}
              />
            </div>
            <div className='recFormSec'>
              <p className='recFormLeft'>Ingredients:</p>
              <input
                type='text'
                name='ingredients'
                value={this.state.ingredients}
                onChange={this.handleChange}
              />
            </div>
            <div className='recFormSec'>
              <p className='recFormLeft'>Instructions:</p>
              <input
                type='text'
                name='instructions'
                value={this.state.instructions}
                onChange={this.handleChange}
              />
            </div>
            <div className='recFormSec'>
              <p className='recFormLeft'>Source:</p>
              <input
                type='text'
                name='source'
                value={this.state.source}
                onChange={this.handleChange}
              />
            </div>
            <div className='recFormSec'>
              <p className='recFormLeft'> Category:</p>
              <input
                type='text'
                name='category'
                value={this.state.category}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className='fadeBttn' type='submit'>Update recipe!</button>
        </form>
      </div>
    )
  }
}

export default UpdateRecipe;