import React, { Component } from 'react'
import styled from 'styled-components'
import { Collapse, CardBody } from 'reactstrap'

const Answer = styled(CardBody)`
  color: #4d4d4de3;
  padding: 0 0 0 20px;
`
const ItemQuestions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #f7f7f7ff;
  margin: 0 0 5px 0;
  padding: 0;
  height: 45px;
  cursor: pointer;
  a{
    padding: 0 50px 0 20px;
    color: #4d4d4de3!important;
    font-size: 18px;
  }
`
const Open = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: #38b59386;
  p{
    color: #fff;
    font-size: 24px;
    margin: 0;
  }
`
/* eslint jsx-a11y/anchor-is-valid: 0 */
class Questions extends Component {
  state = { collapse: false }

  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState((state) => ({ collapse: !state.collapse }))
  }

  render() {
    const { collapse } = this.state
    return (
      <>
        <ItemQuestions onClick={this.toggle} style={{ marginBottom: '1rem' }}>
          <a>Toggle</a>
          <Open><p>&gt;</p></Open>
        </ItemQuestions>
        <Collapse isOpen={collapse}>
          <Answer>
          Anim pariatur cliche reprehenderit,
          enim eiusmod high life accusamus terry richardson ad squid. Nihil
          anim keffiyeh helvetica, craft beer labore wes anderson cred
          nesciunt sapiente ea proident.
          </Answer>
        </Collapse>
      </>
    )
  }
}


export default Questions
