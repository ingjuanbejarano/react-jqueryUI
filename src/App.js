import React, { useState, useEffect, createRef } from 'react';
import $ from 'jquery';
import 'jquery-ui/ui/widgets/sortable';
import 'jquery-ui/themes/base/all.css';
import logo from './logo.svg';
import './App.css';

const Sortable = () => {
  const ref = createRef();
  const [$node, set$node] = useState(null);

  useEffect(() => {
    const el = ref.current;
    const $node = $(el).sortable({
      opacity: 0.8,
    });
    set$node($node);

    return () => {
      console.log('cierra pues');
      $node.sortable('destroy');
    };
  }, []);

  return (
    <ul id="sortable" ref={ref}>
      <li className="ui-state-default">
        <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 1
      </li>
      <li className="ui-state-default">
        <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 2
      </li>
      <li className="ui-state-default">
        <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 3
      </li>
      <li className="ui-state-default">
        <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 4
      </li>
      <li className="ui-state-default">
        <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 5
      </li>
      <li className="ui-state-default">
        <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 6
      </li>
      <li className="ui-state-default">
        <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>Item 7
      </li>
    </ul>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Sortable />
    </div>
  );
}

export default App;
