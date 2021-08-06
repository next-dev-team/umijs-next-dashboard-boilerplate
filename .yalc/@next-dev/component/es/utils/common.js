import "antd/es/button/style";
import _Button from "antd/es/button";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import React from 'react';
export var isImg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
export var getChildrenToRender = function getChildrenToRender(item, i) {
  var tag = item.name && item.name.indexOf('title') === 0 ? 'h1' : 'div';
  tag = item.href ? 'a' : tag;
  var children = typeof item.children === 'string' && item.children.match(/^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/) ? /*#__PURE__*/React.createElement('img', {
    src: item.children,
    alt: 'img'
  }) : /*#__PURE__*/React.createElement('span', {
    dangerouslySetInnerHTML: {
      __html: item.children
    }
  });

  if (item.name.indexOf('button') === 0) {
    if (_typeof(item.children) === 'object') {
      children = /*#__PURE__*/React.createElement(_Button, _objectSpread(_objectSpread({}, item.children), {}, {
        'data-edit': 'link,text'
      }), /*#__PURE__*/React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: item.children.children
        }
      }));
    } else {
      item['data-edit'] = 'linkA,text';
    }
  }

  if (item.name.indexOf('link') === 0) {
    item['data-edit'] = 'linkA,text';
  }

  return /*#__PURE__*/React.createElement(tag, _objectSpread({
    key: i.toString()
  }, item), children);
};