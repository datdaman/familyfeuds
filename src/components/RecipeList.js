import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectedRecipe } from '../actions'

import '../styles/RecipeList.scss'

class RecipeList extends Component {

  render() {
    return (
      <div className="three wide column">
      <div className="ui middle aligned divided items">
      {console.log(this.props.recipes)}
        {this.props.recipes.map(recipe => {
          return(
            <div key={recipe.id} className="item item-list" onClick={() => this.props.selectedRecipe(recipe)}>
              <div className="content">
                <div className="ui fluid rounded image">
                  <img src={recipe.image_URL} alt={recipe.name}/>
                </div>
                
                <div>{recipe.name}</div>
              </div>
            </div>
          )
        })}
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { recipes: state.recipes }
}

export default connect(mapStateToProps, { selectedRecipe })(RecipeList)
