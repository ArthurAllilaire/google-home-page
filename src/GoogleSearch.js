import React from 'react';
import {FaBars, FaSearch, FaMicrophone, FaTimes, FaNewspaper, FaMapMarker, FaCaretSquareRight, FaTag, FaEllipsisV, FaCircle, FaAngleUp, FaAngleDown, FaArrowRight } from "react-icons/fa";
import './GoogleSearch.css';
import {CSSTransition} from 'react-transition-group'; // ES6

class GoogleSearch extends React.Component{
  render() {
    return(
      <div className="googleSearch">
        <Header backToHome={this.props.backToHome}/>
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
      CrossIcon = null
    }
    return(
    <div className="google-header-container">
      <div className="top-header-container">
        <div className="logo">
          <button onClick={this.props.backToHome} className="logo-button"> 
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="Google logo" height="30" width="92" />
          </button>
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
          <div className="icon-list-item icon-list-item_blue">
            <FaSearch className="icon-list-item-icon"/>
            <p>All</p>
            <div id="blue-border"></div>
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
  const otherSearches=["how to build a website from scratch", "how to create a website on google", "creating a website for your business", "learn how to build a website", "how to build a good website", "how to build a website from scratch html", "how to build a website for a client"]
  return(
    <div className="search-results-container">
      <div id="results-container">
        About 120,000,000 results (0.63 seconds)
      </div>
      <SearchResult ad={true} link="https://www.wix.com/" header="
      Free Website Builder - Build Your Own New Website" mainText="Wix is the Best Website Builder Out There! Build a Site, Grow a Business & More, with Wix! Designer-Made Templates, Intuitive Drag & Drop Customization, Unique Features. Start Now! Easily Customizable. Trusted By 160M+ Users. Try It Free. Flexible plans. Easy To Use."  />
      <SearchResult ad={true} link="https://www.top10bestwebsitebuilders.co.uk/creating_site/special_offer" header="Build Your Website ??? This is Your Final Stop" mainText="Compare Top 10 Best Rated Brands for Best Features and Deals. Choose & Start Creating! We Rank the Very Best Website Builders. Creating A Website Had Never Been Easier!"/>
      <SearchResult ad={true} link="https://www.mettrr.com/" header="Mettrr Website Creator ??? --" mainText="Everything You Need Is Included So Let Us Take Away The Stress Of Building A Website. Fantastic Value, Simple Pricing! From ??240 Yearly or ??34.99 Monthly Excluding VAT."/>
      <SearchResult ad={true} link="https://www.webdesignlane.co.uk/" header="??349 Custom Website Design ??? 100% Ownership Rights" mainText="Unlimited Pages, Unlimited Revisions, 24 Hrs TAT, 100% Money Back, Order Now! SSL Secure. Website Maintenance. Mobile/Tablet Friendly. One Time Fee. Ecommerce Solutions."/>
      <SearchResult ad={false} link="https://victor-lf.github.io" header="build this webpage - GitHub Pages" mainText="build this webpage. https://benjdelt.github.io/google-results/. With zero coding experience, artist building 180 webpages in 180 days ..." />
      <SearchResult ad={false} link="https://www.websitebuilderexpert.com/building-websites/" header="How to Build a Website 2021 | A Step by Step Beginner's Guide" mainText="6 Apr 2021 ??? Anyone can build a website with the right tools - and the right guide! We'll show you how to make yours in just 9 steps." />
      <SearchResult ad={false} link="https://www.pcmag.com/how-to/how-to-create-a-website" header="How to Create a Website | PCMag" mainText="You can use an online service to create web pages, or build it offline using a desktop software tool. Or, if you're a coding dynamo, use a plain text editor to create a ..." />
      <PeopleAlsoAsk 
        listHeader1="How can I create my own webpage" 
        listItem1={(
          <WebsiteSummary 
          text={(
            <div>
              <h3><strong>How to set up a website: 5 steps to get started</strong></h3>
              <ol>
                <li>Make a plan for your website's structure and content</li>
                <li>Register a domain name ??? ideally pick a .com.
                </li>
                <li>Find a website builder (and hosting provider) to create your site.
                </li>
                <li>
                  Optimize it for search engines.
                </li>
                <li>
                  Launch your website
                </li>
              </ol>
            </div>
            )}
          link="https://www.websitetooltester.com/en/how-to-set-up-my-own-website/"
          linkHeader="How to set up a website in 2021? Our updated beginners guide."
          date="9 Feb 2021"
          searchFor="How can I create my own webpage"
          />
          )}
        listHeader2="How much does it cost to have someone build your website?"
        listItem2={(
          <WebsiteSummary
          text="How Much Does Building a Typical Website Cost You? Depending on your needs, website development costs anywhere between $100 and $500. If you need a feature-rich, custom-built website, it can go as high as $30,000 or more. To build a small website, you'll need to have a budget for the domain name and web hosting."
          date="1 Mar 2021"
          link="https://www.isitwp.com/how-much-does-it-cost-to-build-a-website-expert-answer/"
          linkHeader="How Much Does It REALLY Cost to Build a Website? (Expert Answer)"
          searchFor="How much does it cost to have someone build your website?"
          />
          )}
          listHeader3="Is it hard to build a website?"
          listItem3={(
            <WebsiteSummary 
              text="Learning to build a website from scratch can take a long time, especially if you aren't very technical. Even if you're using drag and drop tools you may need to do a lot tweaking to get it right. ... It would be difficult for anyone to create a highly profitable website within a couple months."
              date="15 Aug 2017"
              link="https://jammydigital.com/shouldnt-design-website/"
              linkHeader="7 Reasons you SHOULDN'T Design Your Own Website"
              searchFor="Is it hard to build a website?"
            />
          )}
          listHeader4="How much should a website cost in 2020?"
          listItem4={(
            <WebsiteSummary
              text="On average, it costs around $200 to build a website, with an ongoing cost of around $50 per month to maintain it. This estimate is higher if you hire a designer or developer ??? expect an upfront charge of around $6,000, with an ongoing cost of $1,000 per year."
              date="1 Dec 2020"
              link="https://www.websitebuilderexpert.com/building-websites/how-much-should-a-website-cost/"
              linkHeader="How Much Does a Website Cost in 2021? (Full Breakdown)"
              searchFor="How much should a website cost in 2020?"
            />
          )}
            
        />
      <SearchResult ad={false} link="https://neilpatel.com/blog/from-0-to-launch-6-steps-to-building-your-first-website/" header="Build a Website: 6 Steps From 0 to Launch - Neil Patel" mainText="Ready to build a website? Here's step by step guide to building and opimizing your first website including what hosting and CMS to use." />
      <SearchResult ad={false} link="https://makeawebsitehub.com/" header="Make Your Own Website in Just 1 Hour With This Easy Guide ..." mainText="This site teaches you how to make a website in just 3 easy to follow steps. There's also lots of really useful resources to help you build traffic in 2021.
      " />
      <SearchResult ad={false} link="https://websitesetup.org/" header="How to Create a Website: Step-by-Step Guide for Beginners ..." mainText="25 Jan 2021 ??? Things You Need In Order to Build a Website ?? Choose a domain name ?? Register a domain and sign up with web hosting ?? Set up a website using ..." />
      <RelatedSearches />
      <OtherSearches otherSearches={otherSearches} />
      <GoogleNextPages />
    </div>
  )
}
function SearchResult ({ad, link, header, mainText}) {  
  return(
    <div className="search-result-container">
      <ResultHeader ad={ad} link={link} header={header} />
      <div className="search-result-text">
        {mainText}
      </div>
    </div>
  )
}
function ResultHeader({ad, link, header }){
  let topHeader;
  if(ad){
    topHeader = 
    <div className="top-header-search-result">
      <strong>Ad</strong>
      <FaCircle className="dot" size={3}/>
      <a href={link} className="search-result-small-link">{link}</a>
    </div>
  } else{
    topHeader = 
    <div className="top-header-search-result">
      <a href={link} className="search-result-small-link">{link}</a>
    </div>
  }
  return(
    <div className="search-result-header-container">
      {topHeader}
      <div className="search-result-header">
        <a href={link} className="search-result-link">
        {header}
        </a>
      </div>
    </div>
  )
}
class PeopleAlsoAsk extends React.Component {
  constructor(props){
    super(props);
    this.state={
      showItem1: false,
      showItem2: false,
      showItem3: false,
      showItem4: false
    }
    //Use a higher order function for onClick that already has the right list number bound when passed to DropdownMenuItem
    this.onClick = this.onClick.bind(this);
    this.stateToOpposite = this.stateToOpposite.bind(this);
  }
  onClick(number, stateToOpposite){
    let label = "showItem" + number.toString();
    return function(e) {
      e.preventDefault();
      stateToOpposite(label);
    }
  }
  stateToOpposite(label){
    this.setState(
      function(prevState) {
        return {
          [label]: !prevState[label]
        };
      });
  }
  render(){
    const {listHeader1, listItem1, listHeader2, listItem2, listHeader3, listItem3, listHeader4, listItem4} = this.props;
    const {showItem1, showItem2, showItem3, showItem4} = this.state;
    return(
      <div className="PeopleAlsoAsk-container">
        <h2 className="people-ask-header">People also ask</h2>
        <DropdownMenuItem title={listHeader1} up={showItem1} onClick={this.onClick(1, this.stateToOpposite)} />
        {showItem1 ? listItem1 : null}
        <DropdownMenuItem title={listHeader2} up={showItem2} onClick={this.onClick(2, this.stateToOpposite)} />
        {showItem2 ? listItem2 : null}    
        <DropdownMenuItem title={listHeader3} up={showItem3} onClick={this.onClick(3, this.stateToOpposite)} />
        {showItem3 ? listItem3 : null}  
        <DropdownMenuItem title={listHeader4} up={showItem4} onClick={this.onClick(4, this.stateToOpposite)} />
        {showItem4 ? listItem4 : null}   
      </div>
    )
  }
}
function DropdownMenuItem({title, up, onClick, img="", key}){
  let icon;
  let imageDiv;
  if(up){
    icon =  (<div className="DropdownMenuItem__icon-container">
              <FaAngleUp size={20} className="DropdownMenuItem__icon"/>
            </div>);
  } else{
    icon =  (<div className="DropdownMenuItem__icon-container">
    <FaAngleDown size={20} className="DropdownMenuItem__icon" />
    </div>);
    if(img){
      imageDiv =(<div className="DropdownMenuItem__img-container" key={key}>
                  <img src={img} alt="" className="DropdownMenuItem__img"/>
                </div>)
    } else{
      imageDiv = null;
    }
  }
  // <CSSTransition
  // in={!up}
  // timeout={500}
  // classNames="DropdownMenu__image-anim">
  // </CSSTransition>
  return(
    <button className={img !== "" ? "DropdownMenuItem_img" : "DropdownMenuItem"} onClick={onClick}>
      {imageDiv}
      {title}
      {icon}
    </button>
  )
}
function WebsiteSummary({text, link, linkHeader, date, searchFor}){
  return(
    <div className="website-summary-container">
    <div className="website-summary-text">
      <div>
        {text}
        <span className="website-summary-date">{date}</span>
      </div>
    </div>
    <ResultHeader ad={false} link={link} header={linkHeader} />
    <div className="website-summary-searchFor">
      Search for: <a href="#" className="website-summary-searchFor-link">{searchFor}</a>
    </div>
    </div>
    )
}
class RelatedSearches extends React.Component{
  constructor(props){
    super(props);
    this.state={
      showItem1: false,
      showItem2: false
    }
    //Use a higher order function for onClick that already has the right list number bound when passed to DropdownMenuItem
    this.onClick = this.onClick.bind(this);
    this.stateToOpposite = this.stateToOpposite.bind(this);
  }
  onClick(number, stateToOpposite){
    let label = "showItem" + number.toString();
    return function(e) {
      e.preventDefault();
      stateToOpposite(label);
    }
  }
  stateToOpposite(label){
    this.setState(
      function(prevState) {
        return {
          [label]: !prevState[label]
        };
      });
  }
  render(){
    const listHeader1 = "Best website builder";
    const listHeader2 = "Website builder";
    const listHeaderImg1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp-H7mbR1mOhVFdmxF3CyId4JuZORaJlkyFu2a&s=0";
    const listHeaderImg2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8xzhzm3Ly4xegC8IZkKB29Q4J5j42kVGX6W6JMa8&s=0";
    const {showItem1, showItem2} = this.state;
    const listItem1Images = [
      {img: listHeaderImg1, text: "GoDaddy"},
      {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9y7v9prw0Gxl5geyjKKDcK2PdMqY6xoODCPc0AzrEmi-4zSpNbpfJRg&s=0", text:"Squarespace"},
      {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7htTH7q8j-TGD3x7AgbahNzXLaSpkrCnCB-kI&s=0", text:"Weebly"},
      {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTURCLyawZV5N54GZIjmoyPab78J3XSx7Q9J98N&s=0", text:"Shopify"}, 
      {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXS78aapUUrlxhwz1RHkyNACWju8qTLm30O0X&s=0", text:"HostGator"}, 
      {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivpDeDqCrJwwgI_9zcohTAc4-YNaxvl0ZR1r-&s=0", text:"Jimdo"}]
    let listItem1ImageList = listItem1Images.map(
      function(item){
        return(
          <a href="#" className="WebBuilderList__item-container" key={item.text}>
            <div className="WebBuilderList__img-container">
              <img src={item.img} alt="" className="WebBuilderList__img"/>
            </div>
            <div className="WebBuilderList__img-text">
              {item.text}
            </div>
          </a>
        )
      }
    )
    const listItem1 = (
      <div className="WebBuilderList">
        <div className="WebBuilderList__photo-list">
          {listItem1ImageList}
        </div>
        <a href="#" className="WebBuilderList__see-more">
          <FaArrowRight className="WebBuilderList__icon"/>
          <div className="WebBuilderList__see-more-text">See more</div>
        </a>
      </div>
    )
    const listItem2 = (
      <div className="WikiItem">
        <div className="WikiItem__Wiki-cont">
          <div className="WikiItem__Header-cont">
            <div className="WikiItem__Img-cont">
              <img src={listHeaderImg2} alt="" className="WikiItem__Img"/>
            </div>
            <div className="WikiItem__Header">
              <h3 className="WikiItem__Header-text">Website Builder</h3>
              <div className="WikiItem__Sub-header">Software category</div>
            </div>
          </div>
          <div className="WikiItem__Wiki-text-cont">Website builders are tools that typically allow the construction of websites without manual code editing. They fall into two categories: online proprietary tools provided by web hosting companies. These are typically intended for users to build their private site.
          <span><a href="https://en.wikipedia.org/wiki/Website_builder" className="WikiItem__Wiki-link">Wikipedia</a></span>
          </div>
        </div>
      </div>
    )
    return(
      <div className="RelatedSearches">
        <h2 className="RelatedSearches__header">Related Searches</h2>
        <DropdownMenuItem title={listHeader1} up={showItem1} onClick={this.onClick(1, this.stateToOpposite)} img={listHeaderImg1} key={1} />
        {showItem1 ? listItem1 : null}
        <DropdownMenuItem title={listHeader2} up={showItem2} onClick={this.onClick(2, this.stateToOpposite)} img={listHeaderImg2} key={2} />
        {showItem2 ? listItem2 : null}       
      </div>
    )
  }
}

function OtherSearches({otherSearches}){
  let otherSearcheshtml = otherSearches.map(
    function(item){
      return(
        <a href="#" className="otherSearches__list-item" key={item}>
          <FaSearch color="black" className="otherSearches__FaSearch"/>
          <div className="otherSearches__link-text">{item}</div>
        </a>
      )
    }
  )
  return(
    <div className="otherSearches">
      {otherSearcheshtml}
    </div>
  )
}
function GoogleNextPages(){
  // Block is called GoogleNextPages
  const oLinks = [];
  oLinks.push(
    <div      className="GoogleNextPages__image-container">
      <div className="GoogleNextPages__o-image_red"></div>
      1
    </div>
  )
  for(let i=2; i < 11; i++){
    oLinks.push(
      <a href="#" className="GoogleNextPages__image-container">
        <div className="GoogleNextPages__o-image"></div>
          {i}      
        </a>
      )
  }
  return (
    <div className="GoogleNextPages">
      <div className="GoogleNextPages__startG"></div>
      {oLinks}
      <div className="GoogleNextPages__end-letters"></div>
      <a href="#" className="GoogleNextPages__image-container">
        <div className="GoogleNextPages__arrow-image"></div>
          Next     
        </a>
    </div>
  )
}
function Footer() {
  return(
    <div className="search-footer-container">
      <div className="search-top-footer-container">
        <div className="country">United Kingdom</div>
        <FaCircle size={10} id="location-circle"/>
        <div>
          AB 12C, London - From your Internet address
        </div>
      </div>
      <div className="search-bottom-footer-container">
        <div className="search-footer-list-item">Help</div>
        <div className="search-footer-list-item">Send feedback</div>
        <div className="search-footer-list-item">Privacy</div>
        <div className="search-footer-list-item">Terms</div>
      </div>
    </div>
  )
}
export default GoogleSearch;