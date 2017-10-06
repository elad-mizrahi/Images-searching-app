import React, {PropTypes} from 'react';
import {Link} from 'react-router';

class HistoryListRow extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const data = this.props.data;
    const clickHandler = this.props.clickHandler;
    return(
      <tr onClick={()=>{clickHandler(data.imagesUrlArray,data.query);}}>
        <td>{data.query}</td>
         <td>{data.service}</td>
         <td>{data.numberOfResults}</td>
         <td>{data.timeOfSearch}</td>
     </tr>
    );
  }
}

HistoryListRow.propTypes = {
  data: PropTypes.object.isRequired,
  clickHandler: PropTypes.func.isRequired
};

export default HistoryListRow;
