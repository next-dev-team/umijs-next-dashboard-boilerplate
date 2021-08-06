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
import TweenOne from 'rc-tween-one/es/TweenOne';
import TweenOneGroup from 'rc-tween-one/es/TweenOneGroup';
import BannerAnim, { Element } from 'rc-banner-anim';
import { isImg } from '../../utils/common';
import 'rc-banner-anim/assets/index.css';
import './index.less';
var BgElement = Element.BgElement;

var Banner3 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Banner3, _React$PureComponent);

  var _super = _createSuper(Banner3);

  function Banner3() {
    _classCallCheck(this, Banner3);

    return _super.apply(this, arguments);
  }

  _createClass(Banner3, [{
    key: "render",
    value: function render() {
      var _this = this;

      var props = _extends({}, this.props);

      var _props$dataSource = props.dataSource,
          dataSource = _props$dataSource === void 0 ? {
        wrapper: {
          className: 'banner2'
        },
        BannerAnim: {
          children: [{
            name: 'elem0',
            BannerElement: {
              className: 'banner-user-elem'
            },
            page: {
              className: 'home-page banner2-page'
            },
            textWrapper: {
              className: 'banner2-text-wrapper'
            },
            bg: {
              className: 'bg bg0'
            },
            title: {
              className: 'banner2-title',
              children: 'Ant Motion'
            },
            content: {
              className: 'banner2-content',
              children: 'An efficient page animation solution'
            },
            button: {
              className: 'banner2-button',
              children: 'Learn More'
            }
          }]
        }
      } : _props$dataSource,
          isMobile = props.isMobile;
      delete props.dataSource;
      delete props.isMobile;
      var childrenToRender = dataSource.BannerAnim.children.map(function (item, i) {
        var elem = item.BannerElement;
        var elemClassName = elem.className;
        delete elem.className;
        var bg = item.bg;
        var textWrapper = item.textWrapper;
        var title = item.title;
        var content = item.content;
        var button = item.button;
        var page = item.page;
        var follow = !isMobile ? {
          delay: 1000,
          minMove: 0.1,
          data: [{
            id: "bg".concat(i),
            value: 15,
            type: 'x'
          }, {
            id: "wrapperBlock".concat(i),
            value: -15,
            type: 'x'
          }]
        } : null;
        return /*#__PURE__*/React.createElement(Element, _extends({
          key: i.toString(),
          followParallax: follow
        }, elem, {
          prefixCls: elemClassName
        }), /*#__PURE__*/React.createElement(BgElement, _extends({
          key: "bg"
        }, bg, {
          id: "bg".concat(i)
        })), /*#__PURE__*/React.createElement("div", page, /*#__PURE__*/React.createElement(QueueAnim, _extends({
          type: ['bottom', 'top'],
          delay: 200,
          key: "text"
        }, textWrapper, {
          id: "wrapperBlock".concat(i)
        }), /*#__PURE__*/React.createElement("div", _extends({
          key: "logo"
        }, title, {
          "data-edit": "text,image"
        }), typeof title.children === 'string' && title.children.match(isImg) ? /*#__PURE__*/React.createElement("img", {
          src: title.children,
          width: "100%",
          alt: "img"
        }) : /*#__PURE__*/React.createElement('span', {
          dangerouslySetInnerHTML: {
            __html: title.children
          }
        })), /*#__PURE__*/React.createElement("div", _extends({
          key: "content"
        }, content), /*#__PURE__*/React.createElement('span', {
          dangerouslySetInnerHTML: {
            __html: content.children
          }
        })), /*#__PURE__*/React.createElement(_Button, _extends({
          type: "ghost",
          key: "button"
        }, button, {
          "data-edit": "link,text"
        }), /*#__PURE__*/React.createElement('span', {
          dangerouslySetInnerHTML: {
            __html: button.children
          }
        })))));
      });
      return /*#__PURE__*/React.createElement("div", _extends({}, props, dataSource.wrapper), /*#__PURE__*/React.createElement(TweenOneGroup, {
        key: "bannerGroup",
        enter: {
          opacity: 0,
          type: 'from'
        },
        leave: {
          opacity: 0
        },
        component: ""
      }, /*#__PURE__*/React.createElement(BannerAnim, _extends({
        key: "BannerAnim"
      }, dataSource.BannerAnim, {
        ref: function ref(c) {
          _this.banner = c;
        }
      }), childrenToRender)), /*#__PURE__*/React.createElement(TweenOne, {
        animation: {
          y: '-=20',
          yoyo: true,
          repeat: -1,
          duration: 1000
        },
        className: "banner2-icon",
        style: {
          bottom: 40
        },
        key: "icon"
      }, /*#__PURE__*/React.createElement(DownOutlined, null)));
    }
  }]);

  return Banner3;
}(React.PureComponent);

export default Banner3;