import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class SearchBar extends Component {

  renderInput = ({ input, type, placeholder }) => {
    return (
        <React.Fragment>
          <input 
            {...input} 
            type={type} 
            placeholder={placeholder}
            autoComplete='off'
          />
          <i className="search icon"/>
        </React.Fragment>
    );
  };

  render(){
    return(
      <div className="ui segment search-bar">
        <form className="ui form icon input" style={{width: '100%'}} onSubmit={e => e.preventDefault()}>
            <Field
              name='search'
              type='text'
              component={this.renderInput}
              placeholder={this.props.placeholder}
            />
        </form>
      </div>
    )
  }
}

SearchBar.propTypes = {
  placeholder: PropTypes.string.isRequired
}

export default reduxForm({
  form: 'searchForm'
})(SearchBar);