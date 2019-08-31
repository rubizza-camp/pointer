import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import ReviewAdd from './ReviewAdd'
import { axiosGetRequest } from '../utils/axios_helper'
import { Rating } from '@material-ui/lab'
import { Typography, Box } from '@material-ui/core'
import { find } from 'lodash';

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
  state = { reviews: [] }

  addReview = (data) => {
    this.setState(({ reviews }) => ({ reviews: [data, ...reviews] }))
  }

  componentDidMount() {
    axiosGetRequest(
      `/${this.props.match.params.reviewable_type}/${this.props.match.params.id}/reviews`,
      {},
      this.setReviews
    )
  }

  setReviews = ({ data }) => {
    this.setState({ reviews: data.data, included: data.included })
  }

  render() {
    const { reviews, included } = this.state
    const { match } = this.props
    return (
      <ReviewsContainer>
        <p>Reviews for {match.params.reviewable_type} # {match.params.id}</p>
        <ReviewAdd
          addReview={this.addReview} 
          match={match}
        />
        <br />
        {
          
          reviews.map(({ attributes, relationships, id }) => (
          <ReviewsItem key={id}>
            <PhotoContainer>
              <ReviewsItemPhoto />
            </PhotoContainer>
            <TextContainer>
              <>
                <ReviewsItemName>
                  <p>
                    User name: 
                    {
                    _.find(
                      included,
                      function(user) { return user.type === relationships.user.data.type && user.id === relationships.user.data.id}
                      ).attributes.name
                    }
                  </p>
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
              </>
            </TextContainer>
          </ReviewsItem>
        ))}
      </ReviewsContainer>
    );
  }
}

export default ReviewList