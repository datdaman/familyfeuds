import React, { Component } from 'react'
import {NavLink } from 'react-router-dom'

import '../styles/Header.scss'

class Header extends Component {
  state = { activeItem: 'familyfeuds' }

  handleItemClick = ({ name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
      
    return (
      <div className="ui secondary pointing menu u-margin-bottom-sm">
        <NavLink  
          to="/familyfeuds" 
          className="item"
          activeclassName='active'
        >
          Home
        </NavLink >
        <NavLink  to="/addRecipe" className="item" activeclassName='active'>
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
