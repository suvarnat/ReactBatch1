/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

class AppContainer extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return <div>{this.props.helloMessage} </div>
  }
}

AppContainer.propTypes = {
  helloMessage:PropTypes.string
};

export default AppContainer;