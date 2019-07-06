import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

ReactDOM.render(
   
  <BrowserRouter>
    <div>
      <Switch>
       {/*  /* IMPORTANT! add any other routes ABOVE the App Route !*/ }
       <Route path="/contact" component={Contact} />
       <Route path="/portfolio" component={Portfolio} />
       <Route path="/about" component={About} />
       <Route path="/app" component={App} />
       <Route path="/index.html" component={App} />
      <Route path="/" component={App} /> 
      </Switch>
    </div> 
  </BrowserRouter>,
  document.getElementById('root')
)
