import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";
const FIRST_PAGE = "FIRST_PAGE";
const LAST_PAGE = "LAST_PAGE";

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
    this.totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

    this.pageNeighbours =
      typeof pageNeighbours === "number"
        ? Math.max(0, Math.min(pageNeighbours, 2))
        : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  componentDidUpdate(prevProps) {
    if (this.props.totalRecords !== prevProps.totalRecords) {
      this.totalRecords = this.props.totalRecords;
      this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);
      this.gotoPage(this.state.currentPage);
    }
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;
    const currentPage = Math.max(1, Math.min(page, this.totalPages));
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords
    };
    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = (page) => {
    this.gotoPage(page);
  };

  handleNavigation = val => {
    this.gotoPage(this.state.currentPage + val);
  };

  fetchPageNumbers = () => {
    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.pageNeighbours;
    //total page numbers to show
    const totalNumbers = this.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(1, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages, currentPage + pageNeighbours);
      let pages = range(startPage, endPage);

      const hasLeft = currentPage > 1;
      const hasRight = currentPage < totalPages;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case hasLeft && !hasRight: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [FIRST_PAGE, LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case !hasLeft && hasRight: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE, LAST_PAGE];
          break;
        }

        case hasLeft && hasRight:
        default: {
          pages = [FIRST_PAGE, LEFT_PAGE, ...pages, RIGHT_PAGE, LAST_PAGE];
          break;
        }
      }

      return [...pages];
    }

    return range(1, totalPages);
  };

  render() {
    if (!this.totalRecords) return null;

    if (this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <Fragment>
        <div className="ui pagination mini menu">
          {pages.map((page, index) => {
            if (page === LEFT_PAGE)
              return (
                  <div
                    key={index}
                    className="link item icon"
                    onClick={() => this.handleNavigation(-1)}
                  >
                    <i className="angle left icon" />
                  </div>
              );
            if(page === FIRST_PAGE)
                return (
                  <div
                    key={index}
                    className="link item icon"
                    onClick={() => this.gotoPage(1)}
                  >
                    <i className="angle double left icon" />
                  </div>
                )

            if (page === RIGHT_PAGE)
              return (
                <div
                  key={index}
                  className="link item icon"
                  onClick={() => this.handleNavigation(1)}
                >
                  <i className="angle right icon" />
                </div>
              );
              if(page === LAST_PAGE)
              return (
                <div
                  key={index}
                  className="link item icon"
                  onClick={() => this.gotoPage(this.totalPages)}
                >
                  <i className="angle double right icon" />
                </div>
              )

            return (
              <div
                key={index}
                className={`link item ${currentPage === page ? "active" : ""}`}
                onClick={e => this.handleClick(page, e)}
              >
                {page}
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func
};

export default Pagination;
