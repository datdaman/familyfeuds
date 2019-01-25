import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import '../styles/Header.scss'

class Header extends Component {
  render() {
      
    return (
      <div className="ui secondary pointing menu u-margin-bottom-sm">
        <NavLink  
          to="/familyfeuds" 
          className="item"
        >
          Home
        </NavLink >
        <NavLink  
          to="/addRecipe" 
          className="item"
        >
          Add Recipe
        </NavLink >
        <div className="right menu">
          <button className="ui item">
            Logout
          </button>
        </div>
      </div>
    )
  }
}

export default Header
