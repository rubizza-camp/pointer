import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ReviewList extends Component {
  state = { reviews: [] }

  componentDidMount() {
    fetch(`/pets/${this.props.match.params.id}/reviews`)
      .then(response => response.json())
      .then(({ data }) => {
        this.setState({reviews: data })
      })
      .catch(error => console.log('error', error))
  }

  render() {
    const { reviews } = this.state
    return (
      <div>
        {reviews.map(({ attributes, id }) => (
          <div key={id}>
            {attributes.comment}
            {attributes.rating}
            <hr/>
          </div>
        ))}
      </div>
    );
  }
}

export default ReviewList
