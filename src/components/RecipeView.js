import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from "lodash";

import SearchBar from './SearchBar'
import RecipeList from './RecipeList'
import Pagination from "./Pagination";


class RecipeView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentRecipes: this.props.recipes,
      currentPage: null,
      totalPages: null,
      totalRecords: this.props.recipes.length
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.recipes.length !== prevProps.recipes.length) {
      this.setState({ currentRecipes: this.props.recipes });
    }

    // if (this.props.search !== prevProps.search) {
    //   this.props.selectedRecipe(null);
    //   // const rules = new RegExp(this.props.search, "i");
    //   // let filteredArray = this.props.recipes.filter(recipe =>
    //   //   rules.test(recipe.name)
    //   // );
    // }
  }

  onPageChanged = data => {
    const { recipes } = this.props;
    const { currentPage, totalPages, pageLimit } = data;
    const offset = (currentPage - 1) * pageLimit;
    const currentRecipes = recipes.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentRecipes, totalPages});
  };

  render() {
    return (
      <div className="ui one column centered grid">
        <div className="column">
        <SearchBar placeholder={'Search Recipe'}/>

        </div>
        <div className="column centered row">
          <Pagination
              searchTerm={this.props.search}
              totalRecords={this.props.recipes.length}
              pageLimit={10}
              onPageChanged={this.onPageChanged}
              pageNeighbours={1}
          />
        </div>
        <div className="column centered row">
          <RecipeList recipes={this.state.currentRecipes}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const searchTerm = _.get(state.form.searchForm, "values.search")
  const rules = new RegExp(searchTerm, "i");
  let filteredArray = Object.values(state.recipes).filter(recipe =>
    rules.test(recipe.name)
  );
  return {
    recipes: filteredArray,
    search: searchTerm,
    selectedRecipe: state.selectedRecipe
  };
};

export default connect(mapStateToProps)(RecipeView)
