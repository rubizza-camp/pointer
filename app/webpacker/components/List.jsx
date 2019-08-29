import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'reactstrap'
import ListItem from './ListItem'
import { Field, Input, Label } from './ListComponents'

class TodoApp extends Component {
    state = {
      initialRender: true,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.initialRender) {
        const { items } = nextProps
        return {
          items,
          text: '',
          initialRender: false,
        }
      }
      return null
    }

    handleTextChange = (event) => {
      this.setState({
        text: event.target.value,
      })
    }

    handleAddItem = (event) => {
      event.preventDefault()
      const { text } = this.state
      const newItem = {
        id: Date.now(),
        text,
      }
      this.setState((prevState) => ({
        items: [...prevState.items, newItem],
        text: '',
      }))
    }

    handleDeleteItem = (itemId) => {
      const { items } = this.state
      const updatedItems = items.filter(item => item.id !== itemId)
      this.setState({
        items: [...updatedItems],
      })
    }

    render() {
      const { items, text } = this.state
      return (
        <>
          <Field>
            <Label htmlFor="name">
                        Times to go for a walk
            </Label>
            <TodoList items={items} onDeleteItem={this.handleDeleteItem} />
            <Input type="text" onChange={this.handleTextChange} value={text} />
          </Field>
          <Button onClick={this.handleAddItem} disabled={!text} color="info" size="sm">Add</Button>
        </>
      )
    }
}

TodoApp.propTypes = {
  items: PropTypes.array.isRequired,
}


const TodoList = (props) => {
  const { onDeleteItem, items } = props
  return (
    <ul>
      {items.map(item => (
        <ListItem key={item.id} id={item.id} text={item.text} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  items: PropTypes.array.isRequired,
}

export default TodoApp
