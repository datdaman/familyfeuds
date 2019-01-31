import React, { Component } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../actions";
import RecipeForm from "./RecipeForm";


class RecipeAdd extends Component {
  onSubmit = formValues => {
    this.props.addRecipe(formValues);
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

export default connect(
  null,
  { addRecipe }
)(RecipeAdd);
