import React from 'react'
import Members from './Members'

/* eslint no-unused-expressions: 0 */
const MembersContainer = () => {
  <>
    {this.props.data.map((c) => (
      <Members
        key={c.id}
        name={c.attributes.name}
        metro={c.attributes.metro}
        tripCount={c.attributes.trip_count}
        avatarUrl={c.attributes.avatar_url}
      />
    ))}
  </>
}


MembersContainer.defaultProps = {
  data:
    [{
      id: 1,
      attributes: {},
    },
    ],
}
export default MembersContainer
