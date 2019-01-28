import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editRecipe } from '../actions'
import RecipeForm from './RecipeForm'

class RecipeEdit extends Component {

  onSubmit = (formValues) => {
    this.props.editRecipe(this.props.match.params.id, formValues)
  }
//TODO: use userid to only show edit on users added recipes
  render() {
    return (
      <div>
        <h3>Edit a Recipe</h3>
        <RecipeForm 
          initialValues={{...this.props.recipe}}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe : state.recipes[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {editRecipe})(RecipeEdit)
