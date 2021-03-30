import logo from './logo.svg';
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

    </div> 
  )
}
function Search() {
  return(
    <div className="search-container">
      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" />
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
