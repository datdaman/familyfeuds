import React, { Component } from 'react'
import { Router, Route} from 'react-router-dom' 

import RecipeView from './RecipeView';
import RecipeAdd from './RecipeAdd';
import history from '../history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="ui container" style={{marginTop: '10px'}}>
            <Route path='/' exact component={RecipeView}/> 
            <Route path='/recipe/add' exact render={()=><RecipeAdd/>}/> 
        </div>  
      </Router>
    )
  }
}

export default App
