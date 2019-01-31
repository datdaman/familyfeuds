import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { selectedRecipe } from "../actions";
import "../styles/RecipeList.scss";

class RecipeList extends Component {
  componentWillUnmount() {
    this.props.selectedRecipe(null);
  }

  renderRecipeList(recipes) {
    return recipes.map(recipe => {
      return (
        <div
          key={recipe.id}
          className="item item-list"
          onClick={() => this.props.selectedRecipe(recipe)}
        >
          <div className="content">
            <div className="ui fluid rounded image">
              <img src={recipe.image_URL} alt={recipe.name} />
            </div>

            <div>{recipe.name}</div>
          </div>
        </div>
      );
    });
  }
//TODO: Improve searching functionality
  render() {
    let filteredArray = [];

    if (!!this.props.search) {
      const rules = new RegExp(this.props.search, "gi");
      filteredArray = this.props.recipes.filter(
        recipe => {
          return rules.test(recipe.name)
        }
      );
    }
    return (
      <div className="three wide column">
        <div className="ui middle aligned divided items">
          {!!this.props.search
            ? this.renderRecipeList(filteredArray)
            : this.renderRecipeList(this.props.recipes)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes,
    search: _.get(state.form.searchForm, "values.search")
  };
};

export default connect(
  mapStateToProps,
  { selectedRecipe }
)(RecipeList);
