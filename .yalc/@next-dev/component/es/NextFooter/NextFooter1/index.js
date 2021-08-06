function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { memo } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Regex } from '@next-dev/core/es/regexp';
import './index.less';
export var NextFooter1 = /*#__PURE__*/memo(function (props) {
  var _dataSource$links;

  var dataSource = props.dataSource;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: 'home-page-wrapper footer2-wrapper'
  }), /*#__PURE__*/React.createElement(OverPack, {
    className: 'home-page footer2',
    playScale: 0.05
  }, /*#__PURE__*/React.createElement(TweenOne, dataSource === null || dataSource === void 0 ? void 0 : dataSource.links, dataSource === null || dataSource === void 0 ? void 0 : (_dataSource$links = dataSource.links) === null || _dataSource$links === void 0 ? void 0 : _dataSource$links.children.map(function (item, i) {
    return /*#__PURE__*/React.createElement("a", _extends({
      key: i.toString()
    }, item, {
      "data-edit": "link,image"
    }), /*#__PURE__*/React.createElement("img", {
      src: item.children,
      height: "100%",
      alt: "img"
    }));
  })), /*#__PURE__*/React.createElement(TweenOne, _extends({
    animation: {
      x: '+=30',
      opacity: 0,
      type: 'from'
    },
    key: "copyright"
  }, dataSource.copyright, {
    "data-edit": "textAndImage"
  }), dataSource.copyright.children.map(function (item, i) {
    return /*#__PURE__*/React.createElement(item.name.indexOf('title') === 0 ? 'h1' : 'div', _objectSpread({
      key: i.toString()
    }, item), typeof item.children === 'string' && item.children.match(Regex.isImg) ? /*#__PURE__*/React.createElement('img', {
      src: item.children,
      alt: 'img'
    }) : /*#__PURE__*/React.createElement('span', {
      dangerouslySetInnerHTML: {
        __html: item.children
      }
    }));
  }))));
});