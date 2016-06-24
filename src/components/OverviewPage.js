import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

class OverviewPage extends Component {
  render(){
    console.log(this.props);
    return (
      <div>
      <table className="table table-hover">
        <tbody>
          <tr>
            <td><GoogleMap lon={138.933334} lat={34.966671} /></td>
          </tr>
        </tbody>
      </table>

      <table className="table table-hover">
        <tbody>
          <tr>
            <td><GoogleMap lon={138.933334} lat={34.966671} /></td>
          </tr>
        </tbody>
      </table>

    </div>
    );
  }
}

export default OverviewPage;
