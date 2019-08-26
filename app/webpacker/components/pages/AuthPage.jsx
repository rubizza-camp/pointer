import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Container } from 'reactstrap';
import MainForm from '../items/singin/MainForm';

class App extends Component {

  render() {
    return(
      <Container>
        <MainForm />
      </Container>     )
  }
}

ReactDOM.render(
  <App/>,
  document.body.appendChild(document.createElement('div')),
)

export default App;