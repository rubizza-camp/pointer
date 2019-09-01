import React, { Component } from 'react'
import { Rating } from '@material-ui/lab'
import { FormControl, ButtonGroup, Button, Typography, Box, TextField } from '@material-ui/core'
import { axiosPostRequest, axiosGetRequest } from '../utils/axios_helper'

const DEFAULT_STATE = { rating: 5, comment: '' }
class ReviewAdd extends Component {
  state = { review: DEFAULT_STATE }

  reviewData = () => {
    const { review } = this.state
    return review
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axiosPostRequest(
      `/${this.props.match.params.reviewable_type}/${this.props.match.params.id}/reviews`,
      this.reviewData(),
      this.createReview
    )
  }

  createReview = ({ data }) => {
    const { addReview } = this.props
    addReview(data)
    this.setState({ review: DEFAULT_STATE })
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
        <Typography variant="h4" gutterBottom>{I18n.t('reviews.create')}</Typography>
        <FormControl fullWidth={true}>
          <TextField
            label={I18n.t('reviews.comment')}
            name="comment"
            value={this.state.review.comment}
            onChange={this.handleChange}
            autoFocus={true}
            multiline={true}
            rows={5}
            rowsMax={20}
            placeholder={I18n.t('reviews.enter_comment')}
            margin="normal"
            fullWidth={true}
          />
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">{I18n.t('reviews.rating')}</Typography>
            <Rating
              name="rating"
              value={Number(this.state.review.rating)}
              onChange={this.handleChange}
            />
          </Box>
          <ButtonGroup size="large" color="primary" aria-label="outlined primary button group">
            <Button component='button' onClick={this.handleSubmit} color="primary">
              {I18n.t('reviews.create')}
            </Button>
            <Button component='button' color="secondary" onClick={this.handleCancel}>
              {I18n.t('reviews.cancel')}
            </Button>
          </ButtonGroup>
        </FormControl>
      </div>
    )
  }
}

export default ReviewAdd
