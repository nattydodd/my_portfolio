import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectWebsite } from '../actions/index';
import { bindActionCreators } from 'redux';

class WebsiteList extends Component {
  renderList() {
    return this.props.websites.map((website) => {
      return (
        <span
          key={website.title}
          onClick={() => this.props.selectWebsite(website)}
          className="website-list-item">
          {website.title}
        </span>
      );
    });
  }


  render() {
    return (
        <div className="col-sm-12 website-list">
            {this.renderList()}
        </div>
    )
  }
}

function mapStateToProps(state) {
  // whatever is returned will show up as props inside of WebsiteList
  return {
    websites: state.websites
  };
}

// Anything returned from this function will end up as props on the WebsiteList container
function mapDispatchToProps(dispatch) {
  //whenever selectWebsite is called, the result should be passed to all reducers
  return bindActionCreators({ selectWebsite: selectWebsite }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(WebsiteList)
// this connects the function and the component and exports a container
// it needs to also know about this new dispatch method (selectWebsite). Make it available as a prop.
