import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutMe from '../components/about-me';
import FinancialAdvice from '../components/financial_advice';
import Muskoka from '../components/muskoka';
import RipeFind from '../components/ripe_find';
import PackApp from '../components/packapp';
import HumanNetwork from '../components/human_network';
import RoadMap from '../components/roadmap';

const {Fullpage, Slide, SideNav} = require('fullpage-react');


let sideNavOptions = {
  right: '5%', //left alignment is default
  top: '40%', //top is 50% by default

  //styles to apply to children
  activeStyles: {color: 'white'},
  hoverStyles: {color: 'yellow'},
  nonActiveStyles: {color: 'gray'}
};


class FullpageReact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: 0,
      navToggle: 'close',
      selected: []
    };

    this.updateActiveState = this.updateActiveState.bind(this);

  }


  updateActiveState(newActive) {
    this.setState({'active': newActive});
  }

  toggleNav(value) {
    this.setState({navToggle: value });

  }

  strikeOut(item) {
    console.log(item)
    this.setState({ selected: [item, ...this.state.selected] })
  }

  shouldComponentUpdate(nP, nS) {
    //ensure hoverStyles and activeStyles update
    return nS.active != this.state.active || nS.navToggle != this.state.navToggle;
  }

  onMouseOver(idx) {
    this.setState({'hover': idx});
  }

  onMouseOut(e) {
    this.setState({'hover': null});
  }

  compareStyles(component, idx) {
    return idx == this.state.active ? component.activeStyles : idx == this.state.hover ? component.hoverStyles : component.nonActiveStyles
  }


  render() {
    let navCount = 7;
    // let navArr = [];
    let navArr = ["About", "Financial Advice for All", "Show Us Your Canada", "Ripe Find", "PackApp", "The Human Network", "Road Map Generator"];
    // for (let i = 0; i < navCount; i++) {
    //   navArr.push(i);
    // }

    let styleVisible = {
      overflow: 'visible'
    }

    let styleHidden = {
      overflow: 'hidden'
    }


    return (
      <Fullpage active={this.updateActiveState}>

        <Slide style={{backgroundColor: 'rgb(255, 174, 174)'}}>
          <AboutMe />
        </Slide>
        <Slide style={{backgroundColor: 'rgb(237, 237, 237)'}}>
          <FinancialAdvice />
        </Slide>
        <Slide style={{backgroundColor: 'rgb(196, 255, 240)'}}>
          <Muskoka />
        </Slide>
        <Slide style={{backgroundColor: 'rgb(255, 231, 249)'}}>
          <RipeFind />
        </Slide>
        <Slide style={{backgroundColor: 'rgb(254, 253, 209)'}}>
          <PackApp />
        </Slide>
        <Slide style={{backgroundColor: 'rgb(210, 255, 227)'}}>
          <HumanNetwork />
        </Slide>
        <Slide style={{backgroundColor: 'rgb(255, 231, 231)'}}>
          <RoadMap />
        </Slide>

        <h1 className={`close-nav ${this.state.navToggle === "open" ? 'visible' : 'invisible' }`} onClick={() => this.toggleNav("close")}>X</h1>
        <h1 className={`open-nav animated infinite bounce ${this.state.navToggle === "close" ? 'visible' : 'invisible' }`}  onClick={() => this.toggleNav("open")}><i className="fa fa-list" aria-hidden="true"></i></h1>

        <div className={this.state.navToggle === "open" ? 'sideNavOpen' : 'sideNavClosed'}>
          <div className={`nav-contents-container ${this.state.navToggle === "open" ? '' : 'contents-closed' }`}>
            <SideNav {...sideNavOptions}>
              {navArr.map((n, idx) => {
                return <div key={idx} ref={idx} className={this.state.selected.includes(navArr[idx]) ? 'selected' : ''} onClick={() => this.strikeOut(navArr[idx])}>{navArr[idx]}</div>
              }, this)}
            </SideNav>
          </div>
        </div>

      </Fullpage>
    );
  }
};

module.exports = FullpageReact;
