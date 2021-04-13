import React from 'react';
import {FaBars, FaSearch, FaMicrophone, FaTimes} from "react-icons/fa";
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
    <div className="header-container">
      <div className="top-header-container">
        <div className="logo">
          <a href="#">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google logo" height="30" width="92" />
          </a>
        </div>
        <div className="search-bar-container">
          <input type="text"  id="input-bar" value={this.state.value} onChange={this.onSearchChange}/>
          {/* TODO conditional rendering only when text in */ }
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
      <div classname="bottom-header-container">

      </div>
    </div>
  )
  }
}
function Search() {
  return(
    <div className="search-container">

    </div>
  )
}
function Footer() {
  return(
    <div className="footer-container">
    
    </div>
  )
}
export default GoogleSearch;