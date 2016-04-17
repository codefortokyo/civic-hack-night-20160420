'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var header = React.createClass({
  render: function() {
    return (
      <header class='clearfix'>
      </header>
    );
  }
});

ReactDOM.render(<h1>Hello world</h1>, document.body);
