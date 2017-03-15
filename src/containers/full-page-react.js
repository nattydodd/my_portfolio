import React, { Component } from 'react';
import { connect } from 'react-redux';
import AboutMe from '../components/about-me';

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
    let navCount = 5;
    // let navArr = [];
    let navArr = ["About", "Financial Advice for All", "Show Us Your Canada", "Ripe Find", "PackApp", "The Human Network", "Road Map Generator"];
    // for (let i = 0; i < navCount; i++) {
    //   navArr.push(i);
    // }

    return (
      <Fullpage active={this.updateActiveState}>

        <Slide style={{backgroundColor: 'rgb(245, 179, 179)'}}>
          <AboutMe />
        </Slide>
        <Slide style={{backgroundColor: 'rgb(242, 148, 132)'}}></Slide>
        <Slide style={{backgroundColor: '#ABE28D'}}></Slide>
        <Slide style={{backgroundColor: '#c5f2ff'}}></Slide>
        <Slide style={{backgroundColor: '#2B2C28'}}></Slide>

        <h1 className={`close-nav ${this.state.navToggle === "open" ? 'visible' : 'invisible' }`} onClick={() => this.toggleNav("close")}>X</h1>
        <h1 className={`open-nav ${this.state.navToggle === "close" ? 'visible' : 'invisible' }`}  onClick={() => this.toggleNav("open")}>Menu</h1>

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
