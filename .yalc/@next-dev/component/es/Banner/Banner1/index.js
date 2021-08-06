function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/button/style";
import _Button from "antd/es/button";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { isImg } from '../../utils/common';
import './index.less';

var Banner1 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Banner1, _React$PureComponent);

  var _super = _createSuper(Banner1);

  function Banner1() {
    _classCallCheck(this, Banner1);

    return _super.apply(this, arguments);
  }

  _createClass(Banner1, [{
    key: "render",
    value: function render() {
      var currentProps = _extends({}, this.props);

      var _currentProps$dataSou = currentProps.dataSource,
          dataSource = _currentProps$dataSou === void 0 ? {
        wrapper: {
          className: 'banner0'
        },
        textWrapper: {
          className: 'banner0-text-wrapper'
        },
        title: {
          className: 'banner0-title',
          children: 'https://zos.alipayobjects.com/rmsportal/HqnZZjBjWRbjyMr.png'
        },
        content: {
          className: 'banner0-content',
          children: 'An efficient page animation solution'
        },
        button: {
          className: 'banner0-button',
          children: 'Learn More'
        }
      } : _currentProps$dataSou;
      delete currentProps.dataSource;
      delete currentProps.isMobile;
      return /*#__PURE__*/React.createElement("div", _extends({}, currentProps, dataSource.wrapper), /*#__PURE__*/React.createElement(QueueAnim, _extends({
        key: "QueueAnim",
        type: ['bottom', 'top'],
        delay: 200
      }, dataSource.textWrapper), /*#__PURE__*/React.createElement("div", _extends({
        key: "title"
      }, dataSource.title, {
        "data-edit": "text,image"
      }), typeof dataSource.title.children === 'string' && dataSource.title.children.match(isImg) ? /*#__PURE__*/React.createElement("img", {
        src: dataSource.title.children,
        width: "100%",
        alt: "img"
      }) : /*#__PURE__*/React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: dataSource.title.children
        }
      })), /*#__PURE__*/React.createElement("div", _extends({
        key: "content"
      }, dataSource.content), /*#__PURE__*/React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: dataSource.content.children
        }
      })), /*#__PURE__*/React.createElement(_Button, _extends({
        ghost: true,
        key: "button"
      }, dataSource.button, {
        "data-edit": "link,text"
      }), /*#__PURE__*/React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: dataSource.button.children
        }
      }))), /*#__PURE__*/React.createElement(TweenOne, {
        animation: {
          y: '-=20',
          yoyo: true,
          repeat: -1,
          duration: 1000
        },
        className: "banner0-icon",
        key: "icon"
      }, /*#__PURE__*/React.createElement(DownOutlined, null)));
    }
  }]);

  return Banner1;
}(React.PureComponent);

export default Banner1;