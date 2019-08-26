import React, { Component } from 'react';
import MainForm from '../items/singup/MainForm';
import ReactDOM from 'react-dom'
import { Container } from 'reactstrap';
class App extends Component {

  render() {
    return(
      <Container class="d-flex justify-content-center">
        <MainForm />
      </Container>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.body.appendChild(document.createElement('div')),
)

export default App;