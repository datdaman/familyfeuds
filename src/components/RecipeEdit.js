import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editRecipe } from '../actions'
import RecipeForm from './RecipeForm'
import Modal from './Modal'

class RecipeEdit extends Component {

  state = {
    active:'',
    formValues:{}
  }

  onSave = (formValues) => {
    this.setState({active:'active', formValues: formValues})
  }

  renderActions() {
    return(
      <React.Fragment>
        <button 
          className="ui button primary" 
          onClick={() => this.props.editRecipe(this.state.formValues)}
        >Yes</button>
        <button 
          className="ui button" 
          onClick={() => this.setState({active:''})}
        >No</button>
      </React.Fragment>
    )
  }

//TODO: use userid to only show edit on users added recipes
  render() {
    return (
      <div>
        <h3>Edit a Recipe</h3>
        <RecipeForm 
          initialValues={{...this.props.recipe}}
          onSubmit={this.onSave}
        />
        <Modal
          title="Edit Recipe"
          content="Are you sure you want to save the changes?"
          actions={this.renderActions()}
          active={this.state.active}
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipe : state.recipes[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {editRecipe})(RecipeEdit)
