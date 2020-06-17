import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Title from './components/Title/Title';
import CircleBtn from './components/CircleBtn/CircleBtn';
import ContactForm from './components/ContactForm/ContactForm';

const Contact = () => {
  const [drawer, setDrawer] = useState(false);
  // const [hover, setHover] =useState(false);

  const drawerToggleClickHandler = () => setDrawer(!drawer);
  const backdropClickHandler = () => setDrawer(!drawer);
  const circleBtnClickHandler = () => setDrawer(!drawer);

  let sideDrawer;
  let backdrop;

    if(drawer) {
      sideDrawer = <SideDrawer   smallBtnClickHandler ={backdropClickHandler}/>;
      backdrop = <Backdrop click={backdropClickHandler}/>;
    }

    return (
      <div className="Contact">
        <header className="Contact-header">
        <Header 
          drawerClickHandler={drawerToggleClickHandler} 
          />
        {sideDrawer}
        {backdrop}
        <Title header1="This is Contact page."
        />
        <ContactForm />
        <CircleBtn 
          text = ">" 
          click={circleBtnClickHandler}
          />
        </header>
      </div>
    );
  }

export default Contact;
