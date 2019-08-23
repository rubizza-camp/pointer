import React, { Component } from 'react';

class ReviewAdd extends Component {
  state = { review: { rating: 5, comment: '' } };

  reviewData = () => {
    const { rating, comment } = this.state
    const { match } = this.props
    return {
      rating,
      comment,
      reviewable_type: 'Pet',
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
      .then(data => {
        this.props.history.push(`/reviews/${data.id}`);
      })
      .catch(error => console.log('error', error));
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCancel = () => {
    this.props.history.push("/reviews");
  }

  render() {
    return (
      <div>
        <h1>Create Review</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Content</label>
            <textarea name="comment" rows="5" value={this.state.comment} onChange={this.handleChange} className="form-control" />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn-dark">Create</button>
            <button type="button" onClick={this.handleCancel} className="btn btn-secondary">Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ReviewAdd;