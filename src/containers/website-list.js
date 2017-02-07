import React, { Component } from 'react';
import { connect } from 'react-redux';

class WebsiteList extends Component {
  renderList() {
    return this.props.websites.map((website) => {
      return (
        <li key={website.title} className="list-group-item">{website.title}</li>
      );
    });
  }


  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of WebsiteList
  return {
    websites: state.websites
  };
}

export default connect(mapStateToProps)(WebsiteList)
// this connects the function and the component and exports a container
