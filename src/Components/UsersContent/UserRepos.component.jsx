import React from 'react';
import './UsersContent.css';


const Repos = ({ userRepos }) => {
  return userRepos.map(repos => <ReposItem repos={repos} />)
}

const ReposItem = ({ repos }) => {
  return (
    <a className="repos fade" href={repos.html_url} target="_blank" rel="noopener noreferrer">
      {repos.name}
    </a>
  )
}

export default Repos; 