import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchComic } from  '../actions/index';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

class CharacterList extends Component {
  constructor(props){
    super(props);
    this.renderCharacter = this.renderCharacter.bind(this);
    this.onComicClick = this.onComicClick.bind(this);
    }
  onComicClick(e){
    const timeStamp = Date.now();
    const comicUrl = e.target.attributes.getNamedItem('comic-data').value;
    console.log('hello')
    this.props.fetchComic(comicUrl, timeStamp);
  }

  renderCharacter(characterData){
    const characterName = characterData.name ;
    const characterId = characterData.id;
    const characterImage = characterData.thumbnail;
    const characterDesc = characterData.description;
    const comics = characterData.comics.items;
    return(
      <div className="character-list" key={characterId}>
        <img className="character-img" src={characterImage.path + '.' + characterImage.extension} />
        <div className="description">
          <h3 className="character-name"> {characterName}</h3>
          <p className="character-desc">{characterDesc}</p>
          <h4>Featured In</h4>
          <ul className="comic-list">
              {comics.map(x => (<li key={x.resourceURI}><Link to="/comic" onClick={this.onComicClick} comic-data={x.resourceURI}>{x.name}</Link></li>) )}
          </ul>
        </div>
      </div>
  )
  }
  render(){
     return(
      <div>
        <SearchBar />
        {this.props.character.map(this.renderCharacter)}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
 return  bindActionCreators({ fetchComic }, dispatch)
}

function mapStateToProps({character}){
  return { character }
}

 export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
