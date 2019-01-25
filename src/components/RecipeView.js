import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import RecipeList from './RecipeList'
import RecipeDetails from './RecipeDetails';

class RecipeView extends Component {


  render() {
    return (
      <div>
      <SearchBar/>
      <div className="ui celled grid">
        <RecipeList/>
        <div className="thirteen wide column" >
        {!!this.props.selectedRecipe && <RecipeDetails/>}
        </div>
      </div>
      </div>
    )
  }
}

const mapStatesToProps = state => {
  return{ selectedRecipe: state.selectedRecipe}
}

export default connect(mapStatesToProps)(RecipeView)
