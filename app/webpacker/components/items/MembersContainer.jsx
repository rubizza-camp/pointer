import React, { Component } from 'react'
import Members from './Members.jsx'

class MembersContainer extends Component {
  render = () => {
    return(
  <>
    {this.props.data.map(c => (
    <Members
    key={c.id}
    name={c.attributes.name}
    metro={c.attributes.metro}
    trip_count={c.attributes.trip_count}
    avatar_url={c.attributes.avatar_url}/>
    ))}
  </>
)
  }
}


MembersContainer.defaultProps =
{
    data:
    [{
      id: 1,
      attributes: {}
    }
  ]
}
export default MembersContainer
