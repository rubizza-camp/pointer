import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Col, Button } from 'reactstrap'

export const Field = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;`

const CloseButton = styled(Button)`
  padding: 0rem 0.4rem;`

export const Input = styled.input`
  border-radius: 15px;
  border: 1px solid #b7b7b7;
  padding: 5px 5px 5px 10px;
  transition: 0.2s;`

export const Label = styled.label`
text-transform: uppercase;
font-weight: 700;
color: #676767;
border-radius: 50%;
  display: inline-block;
  position: relative;
  padding: 6px;
  cursor: pointer;`

class TodoApp extends Component {
    state = {
      items: this.props.items,
      text: '',
    };

    handleTextChange = (event) => {
      this.setState({
        text: event.target.value,
      })
    }

    handleAddItem = (event) => {
      event.preventDefault()

      const newItem = {
        id: Date.now(),
        text: this.state.text,
      }

      this.setState((prevState) => ({
        items: [...prevState.items, newItem],
        text: '',
      }))
    }

    handleDeleteItem = (itemId) => {
      const updatedItems = this.state.items.filter(item => item.id !== itemId)

      this.setState({
        items: [...updatedItems],
      })
    }

    render() {
      console.log(this.state)
      console.log(this.props)
      return (
        <>
          <Field>
            <Label htmlFor="name">
                        Times to go for a walk
            </Label>
            <TodoList items={this.state.items} onDeleteItem={this.handleDeleteItem} />
            <Input type="text" onChange={this.handleTextChange} value={this.state.text} />
          </Field>
          <Button onClick={this.handleAddItem} disabled={!this.state.text} color="info" size="sm">Add</Button>
        </>
      )
    }
}

class TodoItem extends Component {
    deleteItem = (event) => {
      this.props.onDeleteItem(this.props.id)
    }

    render() {
      return (
        <li ref={li => this._listItem = li}>
          <Label>
            {this.props.text}
          </Label>
          <CloseButton type="button" color="danger" onClick={this.deleteItem} size="sm">x</CloseButton>
        </li>
      )
    }
}

const TodoList = (props) => {
  const { onDeleteItem } = props
  return (
    <ul>
      {props.items.map(item => (
        <TodoItem key={item.id} id={item.id} text={item.text} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  )
}

export default TodoApp
