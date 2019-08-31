import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Label, CloseButton } from './ListComponents'

class ListItem extends Component {
    deleteItem = () => {
      const { onDeleteItem, id } = this.props
      onDeleteItem(id)
    }

    render() {
      const { text } = this.props
      return (
        <li>
          <Label>
            {text}
          </Label>
          <CloseButton color="danger" onClick={this.deleteItem} size="sm">x</CloseButton>
        </li>
      )
    }
}

ListItem.propTypes = {
  onDeleteItem: PropTypes.func.isRequired,
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
}

export default ListItem
