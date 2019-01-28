import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom' ;

import Header from './Header';
import RecipeView from './RecipeView';
import RecipeAdd from './RecipeAdd';
import RecipeEdit from './RecipeEdit';
import history from '../history';

import '../styles/utilities.scss'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="ui container" style={{marginTop: '10px'}}>
        
            <Route path='/' component={Header}/> 
            <Route path='/familyfeuds' exact component={RecipeView}/> 
            <Route path='/addRecipe' exact component={RecipeAdd}/> 
            <Route path='/editRecipe/:id' exact component={RecipeEdit}/> 
        </div>  
      </Router>
    )
  }
}

export default App;
