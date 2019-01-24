import React, { Component } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { addRecipe } from '../actions'


class RecipeAdd extends Component {

  renderError({error, touched}){
    if(touched && error)
    return(
      <div className="ui error message">
        <div className="header">{error}</div>
      </div>
    )
  }

  renderInput = ({input, label, meta, value, name}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.addRecipe(formValues)
  }

  renderIngredients = ({ fields }) => (
    <div>
      <div >
        Ingredients:
      <button className="ui circular positive icon right floated button" type="button" onClick={() => fields.push('')}>
          <i className="plus light icon"/>
      </button>
      </div>
      <ul>
        {fields.map((ingredient, index) => (
          <li key={index}>
            <button
              className="ui circular negative icon right floated button"
              type="button"
              title="Remove Member"
              onClick={() => fields.remove(index)}
            >
              <i className="minus light icon"/>
            </button>
            <h4>#{index + 1}</h4>
            <Field
              name={`${ingredient}`}
              component={this.renderInput}
              format={null}
            />
          </li>
        ))}
      </ul>
    </div>
    
  )

  
  render() {
    //description
    //image_URL 
    // author time servings ingredients
    console.log(this.props.recipes)
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="name" component={this.renderInput} label="Recipe Name"/>
        <Field name="image_URL" component={this.renderInput} label="Add Image Link" />
        <Field name="time" component={this.renderInput} label="Total Time" />
        <Field name="servings" component={this.renderInput} label="Servings" />
        <FieldArray name="ingredients" component={this.renderIngredients} />
        <div className="u-margin-top">
        <button className="ui button fluid primary">Add</button></div>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.name){
    errors.name = 'You must enter a name';
  }

  if(!formValues.image_URL){
    errors.image_URL = 'You must provide a image URL'
  }

  return errors
}
const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}
const form = reduxForm({
  form: 'addRecipe',
  validate,
})(RecipeAdd)

export default connect(mapStateToProps, {addRecipe})(form)
