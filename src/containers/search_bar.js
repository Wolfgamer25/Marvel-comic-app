import React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchComics } from '../actions/index';
import { FormControl, Button } from 'react-bootstrap'


class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state={term:''}

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(e){
    console.log(e.target.value);
    this.setState({term:e.target.value})
  }
  onFormSubmit(e){
      e.preventDefualt();
      this.props.fetchComic(this.state.term);
      this.setState({term:''})
  }
  render(){
    return(
      <form>
        <FormControl
          value={this.state.term}
          onChange={this.onInputChange}
           />
        <span className="input-group-btn">
          <Button type="submit" className="btn btn-secondary">Submit</Button>
        </span>
      </form>
    )
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchComics }, dispatch)
}
export default connect(null, mapDispatchToProps)(SearchBar);
