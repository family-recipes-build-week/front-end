import React from 'react';
import axios from 'axios';

const token = localStorage.getItem('token');
const reqOps = {
  headers: {
    authorization: token
  }
};


class AddRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      source: '',
      ingredients: '',
      instructions: '',
      category: '',
      user_id: '',
      isActive: true
    }
  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  toggleClassName = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  addNewRecipe = () => {
    const recipe = {
      title: this.state.title,
      source: this.state.source,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
      category: this.state.category,
      user_id: this.props.getUserId(token)
    };
    axios
      .post('http://localhost:5000/api/recipes', recipe, reqOps)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render() {
    const isActive = this.state.isActive;
    return (
      <div>
        <button className='fadeBttn' onClick={() => this.toggleClassName()}>Add a New Recipe</button>
        <form className={isActive ? "updateClose" : "recipeCard"} onSubmit={this.addNewRecipe}>
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
              <p className='recFormLeft'>Source:</p>
              <input
                type='text'
                name='source'
                value={this.state.source}
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
              <p className='recFormLeft'>Category:</p>
              <input
                type='text'
                name='category'
                value={this.state.category}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <button className='fadeBttn' type='submit'>Add recipe!</button>
        </form>
      </div>
    )
  }
}

export default AddRecipe;