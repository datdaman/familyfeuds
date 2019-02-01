import React, { Component } from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import "../styles/RecipeForm.scss";

class RecipeForm extends Component {
  renderError({ error, touched }) {
    if (touched && error)
      return (
        <div className="ui pointing red basic label">
          <i className="exclamation circle icon" />
          {error}
        </div>
      );
  }

  renderInput = ({ input, label, meta, type, placeholder }) => {
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} type={type} placeholder={placeholder} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  renderIngredients = ({ fields, meta: { error, submitFailed } }) => (
    <div>
      <div className="field u-margin-bottom-sm ingredient">
        <label>
          Ingredients
          {submitFailed && error && (
            <div className="ui left pointing red basic label u-margin-left-md">
              <i className="exclamation circle icon" />
              {error}
            </div>
          )}
        </label>
        
        <button
            className="ui positive icon button form-btn"
            type="button"
            onClick={() => fields.push()}
          >
            <i className="plus light icon" />
        </button>
      </div>
        {fields.map((ingredient, index) => (
          <div className="ingredient" key={index}>
            <Field
              name={`${ingredient}`}
              component={this.renderInput}
              type="text"
              placeholder={`#${index + 1}`}
            />
            <button
              className="ui negative icon button form-btn"
              type="button"
              title="Remove Ingredient"
              onClick={() => fields.remove(index)}
            >
              <i className="trash alternate icon" />
            </button>
          </div>
        ))}
    </div>
  );

  render() {
//TODO: add author - googleAuthuserID add nickname display - customize?
    return (
      <div>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="name"
            type="text"
            component={this.renderInput}
            label="Recipe Name"
          />
          <Field
            name="image_URL"
            type="text"
            component={this.renderInput}
            label="Add Image Link"
          />
          <Field
            name="time"
            type="number"
            component={this.renderInput}
            label="Time (minutes)"
          />
          <Field
            name="servings"
            type="number"
            component={this.renderInput}
            label="Servings"
          />
          <FieldArray name="ingredients" component={this.renderIngredients} />
          <div className="u-margin-top">
            <button className="ui button fluid primary">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.name) errors.name = "Please enter a name";
  
  if (!formValues.image_URL) errors.image_URL = "Please provide an image URL";

  if (!formValues.time)         errors.time = "Required";
  else if (formValues.time < 1) errors.time = "Must be at least 1";
  
  if (!formValues.servings)         errors.servings = "Required"
  else if (formValues.servings < 1) errors.servings = "Must be at least 1";

  if (!formValues.ingredients || !formValues.ingredients.length) {
    errors.ingredients = { _error: "At least one ingredient must be entered" };
  } else {
    const ingredientsErrorArray = [];
    formValues.ingredients.forEach((ingredient, index) => {
      if (!ingredient) {
        ingredientsErrorArray[index] = "Required";
      }
    });
    if (ingredientsErrorArray.length) {
      errors.ingredients = ingredientsErrorArray;
    }
  }

  return errors;
};

export default reduxForm({
  form: "recipeForm",
  validate
})(RecipeForm);
