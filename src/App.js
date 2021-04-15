//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faBars, faSearch, faMicrophone} from '@fortawesome/free-solid-svg-icons'
import GoogleHome from './GoogleHome.js';
import React from 'react';
import GoogleSearch from './GoogleSearch.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    this.setState(
      function(prevState) {
        return(
        {results: !prevState.results}
        )
      });
  }
  render() {
    const {results} = this.state;
    console.log(results)
    if(results){
      return(
          <GoogleSearch backToHome={this.handleSubmit}/>
      )
    }
    return (
      <GoogleHome handleSubmit={this.handleSubmit} />
    );
  }
}

export default App;
