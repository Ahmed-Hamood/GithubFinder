import React from 'react'
import { Link } from 'react-router-dom'

const UserItem = ({ UserInfo: { avatar_url, login, html_url } }) => {
  return (
    <div className="user-item-card" >
      <img src={avatar_url} alt='img' />
      <h3 className="username">{login}</h3>
      <Link to={`user/${login}`} className="user-link" rel="noopener noreferrer">More</Link>
    </div>
  )
}

export default UserItem;