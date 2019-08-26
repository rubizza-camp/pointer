import React, { Component } from 'react'

const DEFAULT_STATE = { rating: 5, comment: '' }

class ReviewAdd extends Component {
  state = { review: DEFAULT_STATE }

  reviewData = () => {
    const { rating, comment } = this.state.review
    const { match } = this.props
    return {
      rating,
      comment,
      reviewable_type: match.params.reviewable_type,
      reviewable_id: match.params.id,
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/pets/${this.props.match.params.id}/reviews`, {
      method: 'POST',
      body: JSON.stringify(this.reviewData()),     
      headers: {'Content-Type': 'application/json' }
    })
      .then(response => response.json())
      .then(({ data }) => {
        const { addReview } = this.props
        addReview(data)
        this.setState({ review: DEFAULT_STATE })
      })
      .catch(error => console.log('error', error));
  }

  handleChange = (event) => {
    event.persist()
    this.setState(({ review }) => ({ review: { ...review, [event.target.name]: event.target.value } }))
  }

  handleCancel = () => {
    this.setState({ review: DEFAULT_STATE })
  }

  render() {
    return (
      <div>
        <h1>Create Review</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Content</label>
            <textarea name="comment" rows="5" value={this.state.review.comment} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Create</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewAdd