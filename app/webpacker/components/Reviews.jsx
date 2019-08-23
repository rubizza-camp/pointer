import styled from 'styled-components'
import { Container } from 'reactstrap'
import React, { Component } from 'react'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'
import ReviewList from './ReviewList'
import ReviewAdd from './ReviewAdd'


const ReviewsContainer = styled(Container)`
`
const PageButton = styled.div`
display: flex;
justify-content: center;
a{
background: #38b59386;
margin: 0 0 0 0;
padding: 10px 40px;
color: #fff;
border-radius: 30px;
transition: 0.3s;
&:hover{
  color: #fff;
  text-decoration: none;
  background: #2f987c;
}
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
p{
  color: #6f6f6f;
}
@media only screen and (max-width: 767px) {
  text-align: center;
  width: 88%;
  margin: 0 6%;
  p{
    margin: 0;
  }
`

class Reviews extends Component {
  render() {
    return (
      <div className="Reviews">
        <Router>
          <div className="container">
            <Navigation />
            <Main />
          </div>
        </Router>
      </div>
    );
  }
}

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="reviews">Reviews</NavLink></li>
      <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="reviews/new">ReviewsNew</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path="/pets/:id/reviews" component={ReviewList} />
    <Route exact path="/pets/:id/reviews/new" component={ReviewAdd} />
  </Switch>
);

export default Reviews
