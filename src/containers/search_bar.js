import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Logo  from '../image/Marvel-Logo.png';
import { fetchCharacter } from '../actions/index';


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state={term:''}

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(e){
    this.setState({term:e.target.value})
  }
  onFormSubmit(e){
      e.preventDefault();
      const timestamp = Date.now();
      this.props.fetchCharacter(this.state.term, timestamp);
      this.setState({term:''});
  }
  render(){
    return(
      <div className="search">
      <img src={Logo} id="logo" />
      <form onSubmit={this.onFormSubmit}>
        <input
          value={this.state.term}
          onChange={this.onInputChange}
          className="form-control search-bar"
           />
        <span className="input-group-btn">
          <button type="submit">Submit</button>
        </span>
      </form>
    </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCharacter }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);
