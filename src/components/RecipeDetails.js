import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import Modal from "./Modal";
import { deleteRecipe, selectedRecipe } from "../actions";
import "../styles/RecipeDetails.scss";

class RecipeDetails extends Component {
  state = {
    isModelOpen: false
  };

  onRecipeDelete = () => {
    this.props.deleteRecipe(this.props.recipe.id);
    this.props.selectedRecipe(null);
    this.onModalClose();
  };

  onModalClose = () => {
    this.setState({ isModelOpen: false });
  };

  onModalOpen = () => {
    this.setState({ isModelOpen: true });
  };

  render() {
    const { recipe } = this.props;

    return (
      <div className="thirteen wide column">
        <div className="recipe-img-container">
          <img
            className="ui centered rounded large image"
            src={_.get(recipe, "image_URL")}
            alt={_.get(recipe, "name")}
          />
        </div>
        <div className="recipe-img-container-title">
          <span>{_.get(recipe, "name")}</span>
        </div>
        <div className="recipe-body u-padding-md  u-margin-top-xs">
          <div className="icon-container">
            <Link to={`/editRecipe/${recipe.id}`}>
              <div className="ui primary button">
                <i className="edit icon" />
                Edit
              </div>
            </Link>
            <div
              className="ui negative button"
              onClick={() => this.onModalOpen()}
            >
              <i className="trash alternate icon" />
              Delete
            </div>
            {this.state.isModelOpen && (
              <Modal
                title="Delete Recipe"
                content="Are you sure you want to delete this recipe?"
                onAction={this.onRecipeDelete}
                onClose={this.onModalClose}
              />
            )}
          </div>
          <div className="ui mini two statistics u-margin-top-xs">
            <div className="statistic">
              <div className="label">
                <i className="clock outline icon" /> {_.get(recipe, "time")}{" "}
                Minutes
              </div>
            </div>
            <div className="statistic">
              <div className="label">
                <i className="utensils icon" /> {_.get(recipe, "servings")}{" "}
                Servings
              </div>
            </div>
          </div>

          <div className="ui two column centered grid ">
            <div className="column centered aligned ">
              {recipe.ingredients.map((ingredients, index) => {
                if (index % 2 === 0) {
                  return (
                    <div key={index} className="ingredients">
                      {ingredients}
                    </div>
                  );
                }
                return null;
              })}
            </div>
            <div className="column centered aligned ">
              {recipe.ingredients.map((ingredients, index) => {
                if (index % 2 !== 0) {
                  return (
                    <div key={index} className="ingredients">
                      {" "}
                      {ingredients}{" "}
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { recipe: state.selectedRecipe };
};

export default connect(
  mapStateToProps,
  { deleteRecipe, selectedRecipe }
)(RecipeDetails);
