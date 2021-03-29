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

    </div> 
  )
}
function Footer() {
  return(
    // I can see this being css grid with three rows - for tomorrow
    <div className="footer-container">

    </div> 
  )
}
export default App;
