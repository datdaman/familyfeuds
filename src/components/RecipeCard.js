import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from "react-redux"

class RecipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = { spans: 0 }
    this.imageRef = React.createRef()
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans)
  }

  componentWillUnmount() {
    this.imageRef.current.removeEventListener('load', this.setSpans)
  }

  setSpans = () => {
    const height = this.imageRef.current && this.imageRef.current.clientHeight + 140
    const spans = Math.ceil(height/10)
    this.setState({ spans })
  }

  render() {
    const { name, image_URL, id } = this.props.recipe
    return (
      <div className="card-container u-margin-bottom-xs" style={{ gridRowEnd: `span ${this.state.spans}`}} >
          <div className="ui card">
            <Link to={`/Recipe/${id}`}>              
              <img 
                ref={this.imageRef}
                src={image_URL}
                alt={name}
              />
            </Link>
            <div className="content">
              <div className="ui small header u-margin-0">{name}</div>
              <div className="meta">
                        {/* TODO: add year*/}
                        <span className="date">Added in 2019</span>
              </div>

              <div className="extra content">
                <i className="heart outline like icon"/>
                {/* TODO: add likes*/}
                0 likes
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default connect(null)(RecipeCard)
