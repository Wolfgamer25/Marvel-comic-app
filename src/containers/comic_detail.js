import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Loading  from '../image/loading.gif';

class ComicDetail extends Component {
  renderComicDetail(comic){
    const image = comic.thumbnail.path + '.' + comic.thumbnail.extension;
    const title = comic.title;
    const description = comic.description;
    const characters = comic.characters.items;
    const creators = comic.creators.items;
    const learnMore = comic.urls[0].url;
    return(
      <div className="Details">
        <img src={image} />
        <div className="detail">
        <h2>{title}</h2>
        <div>{description}</div>
        {console.log('pathname',this.props)}
        <div>
          <h3>Characters Involved</h3>
          <ul>
            {characters.map(x => (<li>{x.name}</li>))}
          </ul>
        </div>
        <div>
          <h3>Creators Involved</h3>
          <ul>
            {creators.map(x =>(<li>{x.name} role:{x.role}</li>) )}
          </ul>
        </div>
        <div><a target="_blank" href={learnMore}>Learn More!</a></div>
        </div>
      </div>
    )
  }
  render(){
    const FontAwesome = require('react-fontawesome');
    console.log(FontAwesome)
    const { comic } = this.props;
    if(!comic){
      return (
        <div>
          <div className="back-button">
            <Link to="/" >
                <i class="fas fa-arrow-alt-circle-left"></i>
            </Link>
          </div>
          <div className="loading" >
            <img src={Loading} />
          </div>
        </div>)
    }
    return(
      <div>
        <div className="comic-detail-body">
          <div className="back-button">
            <Link to="/" >
                <i class="fas fa-arrow-alt-circle-left"></i>
            </Link>
            <p>Back</p>
          </div>
          {this.renderComicDetail(this.props.comic)}
        </div>
      </div>
    )
  }
}
function mapStateToProps({comic}){
  console.log('data', comic)
  return { comic: comic[0] }
}
export default connect(mapStateToProps)(ComicDetail);
