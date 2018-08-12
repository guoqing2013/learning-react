// https://codesandbox.io/s/github/eggheadio-projects/manage-complex-state-in-react-apps-with-mobx/tree/master/01-javascript-sync-the-ui-with-the-app-state-using-mobx-observable-and-observer-in-react?from-embed

import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';
import React from "react";
import ReactDOM from "react-dom";

const appState = observable({
  count: 0
})
appState.increment = function () {
  this.count++;
}
appState.decrement = function () {
  this.count--;
}

@observer class Counter extends Component {
  render() {
    return (
      <div>
        Counter {this.props.store.count} <br />
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
      </div>
    )
  }

  handleInc = () => {
    this.props.store.increment()
  }

  handleDec = () => {
    this.props.store.decrement()
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter store={appState} />, rootElement);
