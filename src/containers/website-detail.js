import React, { Component } from 'react';
import { connect } from 'react-redux';

class WebsiteDetail extends Component {
  render() {

      if (!this.props.website) {
        return <div className="row">
                  <div className="col-sm-7">
                     <img className="laptops" src="https://dl.dropboxusercontent.com/u/80500150/comp2.png"/>
                  </div>
                  <div className="col-sm-4 description">
                    <div className="padded">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                    </div>
                    <div>
                      <button className="btn padded">
                      <a href="https://www.show-us-your-canada.herokuapp.com" target="_blank">
                      View Live Site</a></button>
                    </div>
                  </div>
              </div>
      }

      return (
        <div className="row">
          <div className="col-sm-7">
            <img className="laptops" src={this.props.website.url}/>
          </div>
          <div className="col-sm-4 description">
            <div className="padded">
              {this.props.website.description}
            </div>
            <div>
              <button className="btn padded">
              <a href={this.props.website.link} target="_blank">
              View Live Site</a></button>
            </div>
          </div>
        </div>
      );

  }
}

function mapStateToProps(state) {
  return {
    website: state.activeWebsite
  };
}

export default connect(mapStateToProps)(WebsiteDetail);
