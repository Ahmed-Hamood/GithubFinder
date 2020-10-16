import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import githubAPI from './API/Github_API';
import NavBar from './layout/Navbar.component';
import SearchBar from './SearchBar/SearchBar.component';
import UsersContent from './UsersContent/UsersContent.component';
import UserProfile from './UsersContent/UserProfile.component';
import Spinner from './Spinner/Spinner.js';
import Alert from './layout/Alert.component';
import About from './pages/about.component';

class App extends Component {
  state = {
    users: [],
    SingleUserInfo: {},
    UserRepos: [],
    isLoading: false,
    NoResultMessage: false,
    clearBtnStatus: false,
    alertMsg: null,
  };

  // Get User Input search from SearchBar.component
  SearchForUsers = async (value) => {
    // 1. Reset all state data
    this.setState({ isLoading: true, NoResultMessage: false });
    // 2. Send Request to GitHub API along with search text
    const res = await githubAPI.get('/search/users', {
      params: {
        q: value,
      },
    });

    // 3. set the state data with GitHub Items
    this.setState({ users: res.data.items, isLoading: false });

    // 4. If there is No result from the Github response then set NoResultMessage: true
    if (res.data.items.length === 0) {
      this.setState({ NoResultMessage: true });
    }
  };

  // Get A single User from GitHub API
  SearchForSingleUser = async (username) => {
    // 1. Reset all state data
    this.setState({ isLoading: true });
    // 2. Send Request to GitHub API along with search text
    const res = await githubAPI.get(`/users/${username}`);

    // 3. set the state data with GitHub Items
    this.setState({ SingleUserInfo: res.data, isLoading: false });
  };

  // Get User Repos
  GetUserRepos = async (username) => {
    // 1. Reset all state data
    this.setState({ isLoading: true });
    // 2. Send Request to GitHub API along with search text
    const res = await githubAPI.get(`/users/${username}/repos`, {
      params: {
        // per_page: 6,
        sort: 'created:asc',
      },
    });

    // 3. set the state data with GitHub Items
    this.setState({ UserRepos: res.data, isLoading: false });
  };

  // view users or wait with loading
  ApplicationStatus = () => {
    const styling = {
      marginTop: '50px',
      textAlign: 'center',
      color: 'rgb(99, 99, 99)',
    };

    const { users } = this.state;

    if (this.state.NoResultMessage) {
      return <h2 style={styling}> No Results </h2>;
    }
    if (this.state.isLoading) {
      return <Spinner />;
    }
    return <UsersContent Users={users} />;
  };

  // Clear the state by setting the state into []
  clearUsers = () => this.setState({ users: [], isLoading: false });

  // show alert if the input is Empty - this invoked by SearchSubmit in SearchSubmit()
  setAlert = (msg) => {
    this.setState({ alertMsg: msg });

    setTimeout(() => {
      this.setState({ alertMsg: null });
    }, 2000);
  };

  render() {
    const {
      users,
      alertMsg,
      SingleUserInfo,
      UserRepos,
      isLoading,
    } = this.state;

    return (
      <Router>
        <div>
          <header>
            <NavBar />
          </header>

          <main>
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Fragment>
                    <SearchBar
                      SearchForUsers={this.SearchForUsers}
                      clearUsers={this.clearUsers}
                      clearBtnStatus={users.length ? true : false}
                      alert={this.setAlert}
                    >
                      <Alert alertMsg={alertMsg} />
                    </SearchBar>
                    {this.ApplicationStatus()}
                  </Fragment>
                )}
              />

              <Route exact path="/about" component={About} />

              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <UserProfile
                    {...props}
                    GetSingleUser={this.SearchForSingleUser}
                    GetUserRepos={this.GetUserRepos}
                    user={SingleUserInfo}
                    userRepos={UserRepos}
                    loading={isLoading}
                  />
                )}
              />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
