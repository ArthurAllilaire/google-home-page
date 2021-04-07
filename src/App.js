//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBars, faSearch, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import {FaBars, FaSearch, FaMicrophone} from "react-icons/fa";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search />
      <Footer />
    </div>
  );
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
function Search() {
  return(
    <div className="search-container">
      <div className="search g-img">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" id="google-img" />
      </div>
      <div className="search bar">
        <div className="search-text">
          <FaSearch />
          <FaMicrophone color="blue"/>
          <input type="text" autoFocus/>
        </div>
        <div className="button-link-container">
          <div className="button-links" id="search">
            <a href="#">Google Search</a>
          </div>
          <div className="button-links" id="wheel-link">
            <a href="#">Feeling lucky</a>
          </div>
        </div>
      </div>
      <div className="search" id="empty"></div>
    </div> 
  )
}
function Footer() {
  return(
    // I can see this being css grid with three rows - for tomorrow
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
export default App;
