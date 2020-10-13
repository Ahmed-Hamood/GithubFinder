import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = { InputSearchValue: '' };


  SearchSubmit = (e) => {
    e.preventDefault();

    if (this.state.InputSearchValue.trim().length) {
      this.props.SearchForUsers(this.state.InputSearchValue)
      this.setState({ InputSearchValue: '' });
    } else {
      this.props.alert(' - Please Enter Something')
    }
  };

  InputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {

    const { clearBtnStatus, clearUsers} = this.props;
    return (
      <div className="SearchBar-container fade">
        {this.props.children}
        <form onSubmit={this.SearchSubmit}>
          <input
            type="text"
            placeholder="Search Users..."
            name="InputSearchValue"
            value={this.state.InputSearchValue}
            onChange={this.InputChange}
            maxLength="25"
          />
          <button className="searchBtn"> SEARCH </button>
          {clearBtnStatus && <button className="clearBtn" type="button" onClick={clearUsers}> Clear </button> }
         
        </form>
      </div>
    );
  }
}

export default SearchBar;
