function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";
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
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { getChildrenToRender } from '../../utils/common';
import './index.less';

var getBlock = function getBlock(name) {
  var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    name: name,
    className: 'pricing1-block',
    md: 8,
    xs: 24,
    children: {
      wrapper: {
        className: "pricing1-block-box ".concat(children.wrapperClass || '')
      },
      topWrapper: {
        className: 'pricing1-top-wrapper'
      },
      name: {
        className: 'pricing1-name',
        children: children.name
      },
      money: {
        className: 'pricing1-money',
        children: children.money
      },
      content: {
        className: 'pricing1-content',
        children: children.content
      },
      line: {
        className: 'pricing1-line'
      },
      buttonWrapper: {
        className: 'pricing1-button-wrapper',
        children: {
          a: {
            className: 'pricing1-button',
            href: '#',
            children: children.button
          }
        }
      }
    }
  };
};

var Pricing1 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Pricing1, _React$PureComponent);

  var _super = _createSuper(Pricing1);

  function Pricing1() {
    var _this;

    _classCallCheck(this, Pricing1);

    _this = _super.apply(this, arguments);

    _this.getChildrenToRender = function (item) {
      var _item$children = item.children,
          wrapper = _item$children.wrapper,
          topWrapper = _item$children.topWrapper,
          name = _item$children.name,
          buttonWrapper = _item$children.buttonWrapper,
          line = _item$children.line,
          content = _item$children.content,
          money = _item$children.money;
      return /*#__PURE__*/React.createElement(_Col, _extends({
        key: item.name
      }, item, {
        "data-edit": "Col"
      }), /*#__PURE__*/React.createElement(QueueAnim, _extends({
        type: "bottom"
      }, wrapper), /*#__PURE__*/React.createElement("div", topWrapper, /*#__PURE__*/React.createElement("div", _extends({}, name, {
        key: "name"
      }), /*#__PURE__*/React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: name.children
        }
      })), /*#__PURE__*/React.createElement("h1", _extends({}, money, {
        key: "money"
      }), /*#__PURE__*/React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: money.children
        }
      }))), /*#__PURE__*/React.createElement("div", _extends({}, content, {
        key: "content"
      }), /*#__PURE__*/React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: content.children
        }
      })), /*#__PURE__*/React.createElement("i", _extends({}, line, {
        key: "line"
      })), /*#__PURE__*/React.createElement("div", _extends({}, buttonWrapper, {
        key: "button"
      }), /*#__PURE__*/React.createElement(_Button, _extends({}, buttonWrapper.children.a, {
        "data-edit": "link,text"
      }), /*#__PURE__*/React.createElement('span', {
        dangerouslySetInnerHTML: {
          __html: buttonWrapper.children.a.children
        }
      })))));
    };

    return _this;
  }

  _createClass(Pricing1, [{
    key: "render",
    value: function render() {
      var props = _extends({}, this.props);

      var _props$dataSource = props.dataSource,
          dataSource = _props$dataSource === void 0 ? {
        wrapper: {
          className: 'home-page-wrapper pricing1-wrapper'
        },
        page: {
          className: 'home-page pricing1'
        },
        OverPack: {
          playScale: 0.3,
          className: 'pricing1-content-wrapper'
        },
        titleWrapper: {
          className: 'pricing1-title-wrapper',
          children: [{
            name: 'title',
            children: 'Price List',
            className: 'pricing1-title-h1'
          }]
        },
        block: {
          className: 'pricing1-block-wrapper',
          children: [getBlock('block0', {
            button: 'Free Trial',
            money: '$0',
            name: 'Free',
            content: "<span>\n            140-500Mbps<br/>\n            140 GB-50TB (inclusive)<br/>\n            14500GB data package<br/>\n            14 domestic bills by peak broadband<br/>\n            14Elastic Computing<br/>\n            14 cloud server ECS\n            </span>"
          }), getBlock('block1', {
            wrapperClass: 'active',
            button: 'Buy Now',
            money: '$199',
            name: 'Starter',
            content: "<span>\n            14500-5Gbps<br/>\n            1410 GB-50TB (inclusive)<br/>\n            141TB data package<br/>\n            14 domestic bills by peak broadband<br/>\n            14Elastic Computing<br/>\n            Cloud server ECS\n            </span>"
          }), getBlock('block2', {
            button: 'Buy Now',
            money: '$999',
            name: 'Pro',
            content: "<span>\n            14 greater than 5Gbps<br/>\n            1450 GB-100TB (inclusive)<br/>\n            145TB data package<br/>\n            14 domestic bills by peak broadband<br/>\n            14Elastic Computing<br/>\n            14 cloud server ECS\n            </span>"
          })]
        }
      } : _props$dataSource;
      delete props.dataSource;
      delete props.isMobile;
      var block = dataSource.block;
      var childrenToRender = block.children.map(this.getChildrenToRender);
      return /*#__PURE__*/React.createElement("div", _extends({}, props, dataSource.wrapper), /*#__PURE__*/React.createElement("div", dataSource.page, /*#__PURE__*/React.createElement("div", _extends({
        key: "title"
      }, dataSource.titleWrapper, {
        "data-edit": "titleWrapper"
      }), dataSource.titleWrapper.children.map(getChildrenToRender)), /*#__PURE__*/React.createElement(OverPack, dataSource.OverPack, /*#__PURE__*/React.createElement(QueueAnim, {
        type: "bottom",
        component: _Row,
        leaveReverse: true,
        ease: ['easeOutQuad', 'easeInOutQuad'],
        key: "content",
        "data-edit": "Row"
      }, childrenToRender))));
    }
  }]);

  return Pricing1;
}(React.PureComponent);

export default Pricing1;