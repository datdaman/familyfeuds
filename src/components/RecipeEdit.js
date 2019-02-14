import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editRecipe } from '../actions'
import RecipeForm from './RecipeForm'
import Modal from './Modal'

class RecipeEdit extends Component {

  state = {
    isModelOpen:false,
    formValues:{}
  }

  onRecipeEdit = () => {
    this.props.editRecipe(this.state.formValues)
    this.onModalClose()
  }

  onModalClose = () => {
    this.setState({isModelOpen:false})
  }

  onModalOpen = (formValues) => {
    this.setState({isModelOpen:true, formValues: formValues})
  }

//TODO: use userid to only show edit on users added recipes
  render() {
    return (
      <div>
        <h3>Edit a Recipe</h3>
        <RecipeForm 
          initialValues={{...this.props.recipe}}
          onSubmit={this.onModalOpen}
        />
        {this.state.isModelOpen && <Modal
          title="Edit Recipe"
          content="Are you sure you want to save these changes?"
          onAction={this.onRecipeEdit}
          onClose={this.onModalClose}
        />}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe : state.recipes[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {editRecipe})(RecipeEdit)
