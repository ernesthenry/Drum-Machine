import React from 'react';
import './css/AppOutput.css';

/*
render a single div in which to display the output of the application 
output passed as property from App.js and accessible under props.output
*/
const AppOutput = (props) =>  {
  
  return(
    <div className="AppOutput" id="display">
      {props.output}
    </div>
  );

}

export default AppOutput;
