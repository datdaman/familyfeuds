import React, { Component } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions";
import RecipeForm from "./RecipeForm";


class RecipeAdd extends Component {
  onSubmit = formValues => {
    const {recipes} = this.props
    const recipe = Object.values(recipes)[Object.keys(recipes).length-1]
    let id = !!recipe ? recipe.id + 1 : 0
    this.props.addRecipe({id:id,...formValues});
  };

  render() {
    return (
      <div>
        <h3>Add a Recipe</h3>
        <RecipeForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { recipes: state.recipes }
}

export default connect(
  mapStateToProps,
  { addRecipe }
)(RecipeAdd);
