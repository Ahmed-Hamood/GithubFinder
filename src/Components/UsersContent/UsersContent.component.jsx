import React from 'react'
import './UsersContent.css'

import UserItem from './UserItem.component'

const UsersContent = ({ Users }) => {

  const AllUsersItem = Users.map(user => {
    return <UserItem UserInfo={user} key={user.id} />
  })

  return (
    <div className="users-container fade">
      {AllUsersItem}
    </div>
  )

}

export default UsersContent;