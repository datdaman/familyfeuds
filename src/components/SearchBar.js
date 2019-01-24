import React, { Component } from 'react';

class SearchBar extends Component {

  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault();
    console.log('search')
  }

  render(){
    return(
      <div className="ui segment search-bar">
        <form className="ui form icon input" style={{width: '100%'}} onSubmit={this.onFormSubmit}>
            <input 
              type="text"  
              placeholder="Search "
            />
            <i className="search icon"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;