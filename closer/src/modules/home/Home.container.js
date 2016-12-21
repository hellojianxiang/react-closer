import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as HomeAction from './Home.actions'

import Comps from './../../comps';
const {
	ExampleComp
} = Comps;

import { 
	Button
} from 'react-bootstrap';

class HomeContainer extends Component {
  render() {
  	const { state, actions } = this.props;
  	const { title } = state;
  	const { updateTitleAction } = actions;
    return (
    	<div>
	    	<ExampleComp
	    		content={title}/>
    		<Button onClick={()=>{updateTitleAction()}}>Simple Button</Button>
    	</div>
    );
  }
}

export default connect(
  state => ({state:state.Home}),
  dispatch => ({actions: bindActionCreators(HomeAction, dispatch)})
)(HomeContainer)