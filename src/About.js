import React, {Component} from 'react';
import './About.css';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Title from './components/Title/Title';
import FeatureImg from './components/FeatureImg/FeatureImg';
import CircleBtn from './components/CircleBtn/CircleBtn';
import Footer from './components/Footer/Footer';

class About extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false});
  };

  // resumeBtnClickHandler=(file, text)=>{
  //  function download(file, text) {
  //   let  element = document.createElement('a'); 
  //   element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(text)); 
  //   element.setAttribute('download', file); 
    
  //   document.body.appendChild(element); 
  //   element.click(); 
  //   document.body.removeChild(element); 
  // } 
  
  // document.getElementById("btn").addEventListener("click", function() { 
  // let  text = document.getElementById("text").value; 
  // let filename = "Wendy_Kakuda_CV.pdf"; 
  // download(filename, text); 
  // }, false); 
  // }

  render() {
    let sideDrawer;
    let backdrop;

    if(this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer   smallBtnClickHandler ={this.backdropClickHandler}/>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    return (
      <div className="About">
        <header className="About__header">
        <Header 
          drawerClickHandler={this.drawerToggleClickHandler} 
          />
        {sideDrawer}
        {backdrop}
        </header>
        <div className="About__title">
        <Title 
          header1="about"
          header2="Wendy Kakuda"
          />
        <FeatureImg 
          url="https://res.cloudinary.com/alteredco/image/upload/v1472099721/image_smselfie.jpg"
          title="Photo of Wendy Kakuda"
          />
        </div>
        <article className="About__text">
          <p>I am a Software Developer that has broad career experience in fields such as education, art, communications, PR and mental health. I bring a diverse skill-set to my work and have over seven years experience working directly with clients and stakeholders.</p>
          <p>I love taking creative journeys. I have travelled and lived all over the world, gaining a huge amount of insight and understanding of how different people think and communicate. This inspires me every day.</p>
          <p>My passion is in creating human-centered design that comes to life on the screen. 
          Design should be about people first!</p>
          <p>In the future, I hope to secure a role as a .NET, React Developer. I have an interest in information security and recently achieved a "Certificate in Information Security Management Principles" from BCS.</p>
        </article>
        <div className="About__resume">
          <Title 
          header1="view resume"
          />
          <a  className="About-resLink" href="https://drive.google.com/file/d/1yeihIFRyPN3zpJJE-djhSf0QipP5k8T7/view?usp=sharing" rel="noopener noreferrer" target="_blank">
          <CircleBtn 
          text="view"
          />
          </a>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
