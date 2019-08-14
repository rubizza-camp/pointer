// form.js
import React, { Component } from 'react';
import MainForm from '../components/MainForm';
import { Container } from 'semantic-ui-react';
import ReactDOM from 'react-dom'
class App extends Component {

  render() {
    return(
      <Container textAlign='center'>
        <MainForm />
      </Container>     )
  }
}

ReactDOM.render(
  <App/>,
  document.body.appendChild(document.createElement('div')),
)

export default App;