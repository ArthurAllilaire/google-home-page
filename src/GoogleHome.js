//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBars, faSearch, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {FaBars, FaSearch, FaMicrophone} from "react-icons/fa";
import './GoogleHome.css';
import React from 'react';

class GoogleHome extends React.Component {
  render() {
    return (
      <div className="google-home">
        <Header/>
        <Search handleSubmit={this.props.handleSubmit}/> 
        <Footer />
      </div>
    );
  }
}
function Header() {
  return(
    <div className="header-container">
      <div className="left header-item" id="left-header">
        <div className="hlist-item">About</div>
        <div className="hlist-item">Store</div>
      </div>
      <div className="header" id="blank">
      </div>
      <div className="center header-item">
        <div className="hlist-item">Gmail</div>
        <div className="hlist-item">Images</div>
        <div className="hlist-item">
          <FaBars />
        </div>
        <div className="hlist-item">
          <img src="https://lh3.googleusercontent.com/ogw/ADGmqu_czSG2bcSW3Ytd7FBOnmUTFcvfJZKMXkXlHFk0=s32-c-mo" id="a-image" alt="letter A"/>
        </div>
      </div>
    </div> 
  )
}
class Search extends React.Component {
  render() {
    const {handleSubmit} = this.props;
    return(
      <div className="search-container">
        <div className="search g-img">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" id="google-img" />
        </div>
        <form className="search bar" onSubmit={handleSubmit}>
          <div className="search-text">
            <div className="search-outline">
              <FaSearch className="icons" id="search-icon" size={25}/>
              <FaMicrophone className="icons" color="blue" id="microphone-icon" size={25}/>
              <input type="text" autoFocus id="search-input" />
            </div>
          </div>
          <div className="button-link-container">
            <div>
              <input type="button" value="Google Search" id="button-search" className="button-links"  />
            </div>
            <div>
              <input type="button" value="Feeling lucky" id="wheel-link" className="button-links"/>
            </div>
          </div>
        </form>
        <div className="search" id="empty"></div>
      </div> 
    )
  }
}
function Footer() {
  return(
    <div className="footer-container">
      <div class="location-container" id="uk">United Kingdom</div>
      <div className="footer-list">
        <div class="left">
          <div class="list-item">Advertising</div>
          <div class="list-item">Business</div>
          <div class="list-item">How Search Works</div>
        </div>
        <div class="center" id="carbon-center">
          Carbon neutral since 2007
        </div>
        <div class="right">
          <div class="list-item">Privacy</div>
          <div class="list-item">Terms</div>
          <div class="list-item">Settings</div>
        </div>
      </div>
    </div> 
  )
}
export default GoogleHome;
