import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import Title from './components/Title/Title';
import CircleBtn from './components/CircleBtn/CircleBtn';
import HandPinch from './components/HandPinch/HandPinch';

const App =() =>{
  const [drawer, setDrawer] = useState(false);
  const [hover, setHover] =useState(false);

  const drawerToggleClickHandler = () => setDrawer(!drawer);

  const backdropClickHandler = () => setDrawer(!drawer);

  const circleBtnClickHandler = () => setDrawer(!drawer);

    let sideDrawer;
    let backdrop;

    if(drawer) {
      sideDrawer = <SideDrawer   smallBtnClickHandler ={backdropClickHandler}/>;
      backdrop = <Backdrop click={backdropClickHandler}/>;
    };

    return (
      <div className="App">
        <header className="App-header">
        <Header 
          drawerClickHandler={drawerToggleClickHandler} 
          />
        {sideDrawer}
        {backdrop}
        <Title 
          header1="Wendy"
          header2="Kakuda" 
          />
          <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}>
        <CircleBtn 
          text = {hover?"open":"•••"}
          click={circleBtnClickHandler}
          />
        <HandPinch  hover = {hover}/>
        </div>
        </header>
      </div>
    );
  }

export default App;
