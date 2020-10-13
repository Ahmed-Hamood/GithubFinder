import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Spinner from '.././Spinner/Spinner';
import Repos from '.././UsersContent/UserRepos.component';
import './UsersContent.css';


export class UserProfile extends Component {

  componentDidMount() {
    this.props.GetSingleUser(this.props.match.params.login)
    this.props.GetUserRepos(this.props.match.params.login)
  }

  render() {

    // let data = {
    //   "login": "bradtraversy",
    //   "id": 5550850,
    //   "node_id": "MDQ6VXNlcjU1NTA4NTA=",
    //   "avatar_url": "https://avatars2.githubusercontent.com/u/5550850?v=4",
    //   "gravatar_id": "",
    //   "url": "https://api.github.com/users/bradtraversy",
    //   "html_url": "https://github.com/bradtraversy",
    //   "followers_url": "https://api.github.com/users/bradtraversy/followers",
    //   "following_url": "https://api.github.com/users/bradtraversy/following{/other_user}",
    //   "gists_url": "https://api.github.com/users/bradtraversy/gists{/gist_id}",
    //   "starred_url": "https://api.github.com/users/bradtraversy/starred{/owner}{/repo}",
    //   "subscriptions_url": "https://api.github.com/users/bradtraversy/subscriptions",
    //   "organizations_url": "https://api.github.com/users/bradtraversy/orgs",
    //   "repos_url": "https://api.github.com/users/bradtraversy/repos",
    //   "events_url": "https://api.github.com/users/bradtraversy/events{/privacy}",
    //   "received_events_url": "https://api.github.com/users/bradtraversy/received_events",
    //   "type": "User",
    //   "site_admin": false,
    //   "name": "Brad Traversy",
    //   "company": "Traversy Media",
    //   "blog": "traversymedia.com",
    //   "location": "Boston",
    //   "email": null,
    //   "hireable": true,
    //   "bio": "Full stack web developer and online instructor, specializiing in mostly JS, but also write Python, PHP and some other stuff.",
    //   "twitter_username": null,
    //   "public_repos": 203,
    //   "public_gists": 37,
    //   "followers": 31023,
    //   "following": 6,
    //   "created_at": "2013-09-26T15:36:02Z",
    //   "updated_at": "2020-10-01T14:08:27Z"
    // }
    const {
      name,
      email,
      avatar_url,
      company,
      blog,
      created_at,
      location,
      bio,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
    }
      = this.props.user;
    //= data

    const { loading, userRepos } = this.props;

    if (!loading) {
      return (
        <div className="profile-container fade">
          <Link to="/" className="backbtn"> BACK </Link>
          <h1 className="profile-title">User Profile Detail</h1>
          <div className="user-img-info-content">
            <section className="user-image-name">
              <img src={avatar_url} alt="img" />
              <h2> {login} </h2>
              <a href={html_url} className="visit-btn" target="_blank" rel="noopener noreferrer"> Visit Github Profile</a>
            </section>
            <section className="user-info">
              <p> <span className="bold">Username</span> : {name ? name : 'Not Available'} </p>
              <p><span className="bold">Company</span> : {company ? company : 'Not Available'} </p>
              <p><span className="bold">location</span> : {location ? location : 'Not Available'} </p>
              <p><span className="bold">Website</span> : {blog ? blog : 'Not Available'} </p>
              <p><span className="bold">Email</span>: {email ? email : 'Not Available'} </p>
              <p><span className="bold">CreatedAt</span> : {new Date(created_at).toDateString()}  </p>
              <div class="bio-content">
                <h3>About Me</h3>
                <p>
                  {bio ? bio : <h4 className="gray"> Not Available </h4>}
                </p>
              </div>
            </section>
          </div>

          <div className="user-achievement-content">
            <div className="achievement-content red">
              <h3>Followers</h3>
              <p> {followers} </p>
            </div>
            <div className="achievement-content green">
              <h3 >Following</h3>
              <p> {following} </p>
            </div>
            <div className="achievement-content red">
              <h3>Public Repos</h3>
              <p> {public_repos} </p>
            </div>
            <div className="achievement-content black">
              <h3>Public Gists</h3>
              <p> {public_gists} </p>
            </div>
          </div>

          <div className="repos-content">
          <h1 className="profile-title">User Repos</h1>
            <Repos userRepos={userRepos} />
          </div>

        </div>
      )
    } else {
      return <Spinner />
    }


  }
}

export default UserProfile;
