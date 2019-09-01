import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import ReviewAdd from './ReviewAdd'
import { axiosGetRequest } from '../utils/axios_helper'
import findModel from '../utils/find_model_helper'
import { Rating } from '@material-ui/lab'
import { Typography, Box } from '@material-ui/core'
import { get } from 'lodash'

const ReviewsContainer = styled(Container)`
`
const ReviewsItem = styled.div`
display: flex;
margin: 0 0 40px 0;
flex-direction: row;
@media only screen and (max-width: 767px) {
  padding: 7px 24px;
  flex-direction: column;
`
const PhotoContainer = styled.div`
@media only screen and (max-width: 767px) {
  display: flex;
  justify-content: center;
}
`
const TextContainer = styled.div`
  min-width: 0;
`
const ReviewsItemPhoto = styled.div`
width: 145px;
height: 145px;
border-radius: 50%;
background: #e4e4e485;
margin: 0 50px 0 0;
@media only screen and (max-width: 767px) {
  margin: 0 0 20px 0;
}
`
const ReviewsItemName = styled.div`
color: #38b593;
font-size: 18px;
font-weight: 500;
margin: 0;
@media only screen and (max-width: 767px) {
  text-align: center;
  p{
    margin: 0;
  }
}
`
const ReviewsItemDate = styled.div`
font-weight: 200;
color: #6f6f6f;
font-size: 13px;margin: 5px 0 15px 0;
@media only screen and (max-width: 767px) {
  text-align: center;
}
`
const ReviewsItemText = styled.div`
  p {
    white-space: pre-wrap;
    word-wrap: break-word;
    color: #6f6f6f;
  }
  @media only screen and (max-width: 767px) {
    text-align: center;
    width: 88%;
    margin: 0 6%;
    p {
      margin: 0;
  }
`
class ReviewList extends Component {
  state = { reviews: [], reviewable: {} }

  addReview = (data) => {
    this.setState(({ reviews, included }) => ({
      reviews: [data.data, ...reviews],
      included: [...data.included, ...included],
      reviewable: findModel(data.included, data.data.relationships.reviewable),
    }))
  }

  componentDidMount() {
    axiosGetRequest(
      `/${this.props.match.params.reviewable_type}/${this.props.match.params.id}/reviews`,
      {},
      this.setReviews
    )
    axiosGetRequest(
      `/${this.props.match.params.reviewable_type}/${this.props.match.params.id}`,
      {},
      this.setReviewable
    )
  }

  setReviews = ({ data }) => {
    this.setState({ reviews: data.data, included: data.included })
  }

  setReviewable = ({ data }) => {
    this.setState({ reviewable: data.data})
  }

  render() {
    const { reviews, reviewable, included } = this.state
    const { match } = this.props
    return (
      <ReviewsContainer>
        <ReviewsItemName>
          <p>Reviews for {get(reviewable, 'type')} {get(reviewable, 'attributes.name')}</p>
        </ReviewsItemName>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography component="legend">Rating</Typography>
          <Rating
            readOnly={true}
            value={Number(get(reviewable, 'attributes.rating'))}
          />
        </Box>
        <ReviewAdd
          addReview={this.addReview} 
          setReviewable={this.setReviewable}
          match={match}
        />
        <br />
        {reviews.map(({ attributes, id, relationships }) => (
          <ReviewsItem key={id}>
            <PhotoContainer>
              <ReviewsItemPhoto />
            </PhotoContainer>
            <TextContainer>
              <ReviewsItemName>
                <p>User name: {get(findModel(included, relationships.user), 'attributes.name')}</p>
              </ReviewsItemName>
              <ReviewsItemDate>
                <p>{attributes.created_at}</p>
              </ReviewsItemDate>
              <ReviewsItemText>
                <p>{attributes.comment}</p>
              </ReviewsItemText>
              <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Rating</Typography>
                <Rating
                  readOnly={true}
                  value={Number(attributes.rating)}
                />
              </Box>
              <ReviewsItemText>
                <p>Rating: {attributes.rating}</p>
              </ReviewsItemText>
            </TextContainer>
          </ReviewsItem>
        ))}
      </ReviewsContainer>
    );
  }
}

export default ReviewList
