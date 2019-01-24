import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import '../styles/RecipeDetails.scss'


class RecipeDetails extends Component {
  render() {
    console.log(this.props.selectedRecipe)
    const {selectedRecipe} = this.props
    
 

    return (
      
      <div>
        <img className="ui centered image" src={_.get(selectedRecipe, 'image_URL')} alt={_.get(selectedRecipe, 'description')}/>
        <div className="ui mini two statistics">
          <div className="statistic">
            <div className="value">
              {_.get(selectedRecipe, 'time')}
            </div>
            <div className="label">
              Minutes <i className="clock outline icon"/>
            </div>
          </div>
          <div className="statistic">
            <div className="value">
              {_.get(selectedRecipe, 'servings')}
            </div>
            <div className="label">
              Servings <i className="utensils icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {selectedRecipe: state.selectedRecipe}
}

export default connect(mapStateToProps)(RecipeDetails)
