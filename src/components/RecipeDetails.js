import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import _ from "lodash";

import "../styles/RecipeDetails.scss";

class RecipeDetails extends Component {

  render() {
    console.log(this.props.selectedRecipe);
    const { selectedRecipe } = this.props;

    return (
      <div>
        <div className="recipe-img-container">
          <img
            className="ui centered rounded large image"
            src={_.get(selectedRecipe, "image_URL")}
            alt={_.get(selectedRecipe, "name")}
          />
        </div>
        <div className="recipe-img-container-title">
          <span>{_.get(selectedRecipe, "name")}</span>
        </div>
        <div className="recipe-body u-padding-md  u-margin-top-xs">
          <div className="icon-container">
            <Link to={`/editRecipe/${selectedRecipe.id}`}><i className="edit icon"/></Link>
          </div>
          <div className="ui mini two statistics u-margin-top-xs">
            <div className="statistic">
              <div className="label">
                <i className="clock outline icon" />{" "}
                {_.get(selectedRecipe, "time")} Minutes
              </div>
            </div>
            <div className="statistic">
              <div className="label">
                <i className="utensils icon" />{" "}
                {_.get(selectedRecipe, "servings")} Servings
              </div>
            </div>
          </div>

          <div className="ui two column centered grid ">
            <div className="column centered aligned ">
              {selectedRecipe.ingredients.map((ingredients, index) => {
                if (index % 2 === 0) {
                  return <div key={index} className="ingredients">{ingredients}</div>;
                }
                return null;
              })}
            </div>
            <div className="column centered aligned ">
              {selectedRecipe.ingredients.map((ingredients, index) => {
                if (index % 2 !== 0) {
                  return <div key={index} className="ingredients"> {ingredients} </div>;
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
  return { selectedRecipe: state.selectedRecipe };
};

export default connect(mapStateToProps)(RecipeDetails);
