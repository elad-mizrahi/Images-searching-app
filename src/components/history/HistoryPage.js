/* eslint-disable no-console */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import HistoryListRow from './HistoryListRow';

class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const data = this.props.data;
    const func = this.props.func;
    return (
      <div>
        <table className="table is-bordered is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Query</th>
              <th>Service</th>
              <th>Number Of Results</th>
              <th>Time Of Search</th>
            </tr>
          </thead>
          <tfoot>
          </tfoot>
          <tbody>
            {data.map((item, index) => <HistoryListRow key={index} data={item} clickHandler={func}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

HistoryPage.propTypes = {
  data: PropTypes.array.isRequired,
  func: PropTypes.func.isRequired
};

export default HistoryPage;
