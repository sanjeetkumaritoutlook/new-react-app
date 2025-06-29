'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".galaxy {\r\n  text-align: center;\r\n  padding: 20px;\r\n  color: white;\r\n  background: radial-gradient(circle, #000428, #004e92);\r\n  height: 300px;\r\n  border-radius: 16px;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.orbit {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  margin: 30px auto;\r\n}\r\n\r\n.planet {\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n  transition: transform 0.3s ease;\r\n}\r\n\r\n.planet:hover {\r\n  transform: scale(1.4);\r\n}\r\n\r\n.trivia {\r\n  margin-top: 20px;\r\n  background: rgba(255,255,255,0.1);\r\n  padding: 10px;\r\n  border-radius: 8px;\r\n}\r\n";
styleInject(css_248z);

const planets = [{
  name: 'Mars',
  trivia: 'Known as the Red Planet.'
}, {
  name: 'Jupiter',
  trivia: 'The largest planet in the Solar System.'
}, {
  name: 'Neptune',
  trivia: 'Has the strongest winds in the Solar System.'
}];
function GalaxyExplorer() {
  const [selected, setSelected] = React.useState(null);
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "galaxy"
  }, /*#__PURE__*/React__default["default"].createElement("h2", null, "\uD83C\uDF0C Galaxy Explorer"), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "orbit"
  }, planets.map((planet, idx) => /*#__PURE__*/React__default["default"].createElement("div", {
    key: idx,
    className: "planet planet-".concat(idx),
    onClick: () => setSelected(planet)
  }, "\uD83E\uDE90"))), selected && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "trivia"
  }, /*#__PURE__*/React__default["default"].createElement("h3", null, selected.name), /*#__PURE__*/React__default["default"].createElement("p", null, selected.trivia)));
}

module.exports = GalaxyExplorer;
