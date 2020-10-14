import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = { InputSearchValue: '' };

  // here we get SearchForUsers props and pass userInput to it 
  SearchSubmit = (e) => {
    // 1. prevent form default action
    e.preventDefault();
    // 2A. check if the input is Empty
    if (this.state.InputSearchValue.trim().length) {
      // 3. Execute SearchForUsers thru props to run App - async SearchForUsers(passing InputValue)
      this.props.SearchForUsers(this.state.InputSearchValue)
      // 4. Reset InputValue = ""
      this.setState({ InputSearchValue: '' });
    } else {
      // 2B. Invoke alert method if the input is Empty
      this.props.alert(' - Please Enter Something')
    }
  };

  InputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {

    const { clearBtnStatus, clearUsers } = this.props;
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
          {clearBtnStatus && <button className="clearBtn" type="button" onClick={clearUsers}> Clear </button>}

        </form>
      </div>
    );
  }
}

export default SearchBar;
