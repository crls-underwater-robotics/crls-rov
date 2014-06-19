/** @jsx React.DOM */
var React = require('react');
var socket = require('socket.io-client')();

socket.emit('test', 'was this sent succesfully?');

var Depth = React.createClass({
  getInitialState: function() {
    socket.on('depth:value', this.newDepthValue);
    return { depth: 0 };
  },
  newDepthValue: function(data) {
    this.setState({ depth: data.depth });
  },
  render: function() {
    return (
      <div>Depth: {this.state.depth}</div>
    );
  }
});

React.renderComponent(
  <Depth />,
  document.getElementById('depth')
);
