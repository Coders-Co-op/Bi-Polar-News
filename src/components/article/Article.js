var Collapse = require('rc-collapse');
var Panel = Collapse.Panel;
var React = require('react');
var ReactDOM = require('react-dom');
require('rc-collapse/assets/index.css');

var collapse = (
  <Collapse accordion={true}>
    <Panel header="hello" headerClass="my-header-class">this is panel content</Panel>
    <Panel header="title2">this is panel content2 or other</Panel>
  </Collapse>
);
ReactDOM.render(collapse);
