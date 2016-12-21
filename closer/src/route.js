import React, { Component } from 'react';
import {
  Route,
  Router,
  browserHistory
} from 'react-router';

import Home from './modules/home/Home.container';

class CloserRouter extends Component {
  render() {
    return (
    	<Router history={browserHistory}>
		    <Route path="/" component={Home}/>
		    	<Route path="home" component={Home}/>
		    <Route/>
		  </Router>
    );
  }
}

export default CloserRouter;
