import React, { Component } from 'react';

export default class FinancialAdvice extends Component {
  render() {
    return (
      <div>
        <div className="movie-box">
        </div>
        <div className="col-xs-7 description">
          <div className="stack-box">
            <h5>
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Nationbuilder<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Liquid<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>Javascript<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>jQuery<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>HTML5<br />
              <i className="fa fa-tag animated fadeInLeft" aria-hidden="true"></i>CSS3
            </h5>
          </div>
          <h1>Financial Advice For All</h1>
          <p>Working with Enterprise Canada, I was often asked to build custom Nationbuilder or WordPress Templates, and add complex features to them using Javascript or external APIs. Financial Advice for All, a coalition website to protect access to financial advice for Canadians, is one example. I built this website using Nationbuilder, and then integrated the Open North API to allow users to contact the correct local MPP according to their postal code.</p>
          <button className="btn padded">
            <a href="http://www.financialadviceforall.com" target="_blank">
            View Live Site
            </a>
          </button>
        </div>
      </div>
    )
  }
}
