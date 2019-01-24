import React, { Component } from 'react'

import RecipeView from './RecipeView';
import SearchBar from './SearchBar'

class App extends Component {
  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
          <SearchBar/>
          <RecipeView/>
      </div>
    )
  }
}

export default App
