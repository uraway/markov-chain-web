/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';

/*
 * import 3rd parth libraries
 */
import MarkovChain from './markov';
import {FacebookButton, HatenabookmarkButton} from 'react-social-sharebuttons';
import {TwitterButton} from 'react-social-buttons';
import {TwitterTimeline} from 'react-twitter-embedded-timeline';

export default class extends Component {
  constructor() {
    super();
    this.state = ({
      input: '',
      output: '',
      sentenceNum: 3,
    });
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleClick() {
    let markov = new MarkovChain(this.state.input);
    markov.start(this.state.sentenceNum, (output) => {
      this.setState({ output: output });
    });
  }

  render() {
    return (
      <div>
        <h1>マルコフ連鎖を用いた要約器</h1>
        <p>Author : <a href="https://twitter.com/uraway_">@uraway</a> Website : <a href="http://uraway.hatenablog.com/">はてなブログ</a></p>
        <div>
          <TwitterButton />
          <HatenabookmarkButton />
          <FacebookButton />
        </div>
        <textarea onChange={::this.handleChange} value={this.state.input} style={{ height: 200, width: 300 }}/>
        <button onClick={::this.handleClick} style={{ margin: 20, padding: 10, borderRadius: 12 }}>マルコフ連鎖する</button>
        <textarea value={this.state.output} style={{ height: 200, width: 300 }}/>
        <div>
          <h1>マルコフ連鎖を用いたhubot</h1>
          <TwitterTimeline widgetId="709217189111341060" />
        </div>
      </div>
    );
  }

}
