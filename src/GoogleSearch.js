import React from 'react';
import {FaBars, FaSearch, FaMicrophone, FaTimes, FaNewspaper, FaMapMarker, FaCaretSquareRight, FaTag, FaEllipsisV } from "react-icons/fa";
import './GoogleSearch.css';

class GoogleSearch extends React.Component{
  render() {
    return(
      <div className="googleSearch">
        <Header />
        <Search />
        <Footer />
      </div>
    )
  }
}
class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "build this website"
    };
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onSearchChange(event){
    this.setState({value: event.target.value});
  }
  onClick(){
    this.setState({value: ""})
  }
  render(){
    const {value} = this.state
    let CrossIcon;
    if(value){
      CrossIcon = 
      <button onClick={this.onClick}>
        <FaTimes className="search-icons" size={30} id="cross-icon"/>
      </button>      
    } else{
      CrossIcon = <div></div>
    }
    return(
    <div className="google-header-container">
      <div className="top-header-container">
        <div className="logo">
          <a href="#">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google logo" height="30" width="92" />
          </a>
        </div>
        <div className="search-bar-container">
          <input type="text"  id="input-bar" value={this.state.value} onChange={this.onSearchChange}/>
          {CrossIcon}
          <FaMicrophone className="search-icons" size={27} id="microphone"/>
          <FaSearch className="search-icons" size={27} id="mag-glass"/>
        </div>
        <div id="empty-space"></div>
        <FaBars id="bars" size={25}/>
        <div className="profile-image-container">
          <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_czSG2bcSW3Ytd7FBOnmUTFcvfJZKMXkXlHFk0=s32-c-mo" id="profile-image" alt="letter A"/>
        </div>
      </div>
      <div id="bottom-header-container">
        <div id="icon-list">
          <div className="icon-list-item">
            <FaSearch className="icon-list-item-icon"/>
            <p>All</p>
          </div>
          <div className="icon-list-item">
            <FaNewspaper className="icon-list-item-icon"/>
            <p>News</p>
          </div>
          <div className="icon-list-item">
            <FaMapMarker className="icon-list-item-icon"/>
            <p>Maps</p>
          </div>
          <div className="icon-list-item">
            <FaCaretSquareRight className="icon-list-item-icon"/>
            <p>Videos</p>
          </div>
          <div className="icon-list-item">
            <FaTag className="icon-list-item-icon"/>
            <p>Shopping</p>
          </div>
          <div className="icon-list-item">
            <FaEllipsisV className="icon-list-item-icon"/>
            <p>More</p>
          </div>
        </div>
        <div id="set-tool-list">
          <p className="set-tool-list-item">Settings</p>
          <p className="set-tool-list-item">Tools</p>
        </div>
        <div id="empty"></div>
        <div id="safeSearch">
          <p>SafeSearch on</p> 
        </div>
      </div>
    </div>
  )
  }
}
function Search() {
  return(
    <div className="search-results-container">
      <div id="results-container">
        <p>About 120,000,000 results (0.63 seconds) </p>
      </div>
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />

    </div>
  )
}
function SearchResult () {
  return(<div></div>)
}
function Footer() {
  return(
    <div className="footer-container">
    
    </div>
  )
}
export default GoogleSearch;