import React, { PropTypes, Component } from 'react'

export default class ExampleComp extends Component {
  render() {
  	const {
  		content
  	} = this.props;
  	
    return (
      <h2>{content}</h2>
    )
  }
}
