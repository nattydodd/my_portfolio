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
                      <h3>Share Your Canada</h3>
                      <p>Show Us Your Canada is an online contest and marketing strategy to promote tourism in the Muskoka Region of Canada. It target expats living abroad, and allows them to upload photos and stories depicting their favourite Muskoka memories. I created this app using Rails and JQuery to allow the users to add Instagram-like filters to their submissions. Users can vote, and each vote is verified using an email verification system as well validated by unique IP address. Submissions are also shareable via Instagram and Twitter.</p>
                    </div>
                    <div>
                      <button className="btn padded">
                      <a href="https://muskoka-contest.herokuapp.com/" target="_blank">
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
              <h3>{this.props.website.title}</h3>
              <p>{this.props.website.description}</p>
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
