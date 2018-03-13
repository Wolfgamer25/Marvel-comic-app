import React, { Component } from 'react';
import '../App.css';

import SearchBar from '../containers/search_bar';
import ComicList from '../containers/comic_list';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ComicList />
      </div>
    );
  }
}

export default App;
