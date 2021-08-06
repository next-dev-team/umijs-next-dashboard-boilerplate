function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/divider/style";
import _Divider from "antd/es/divider";
import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import QueueAnim from 'rc-queue-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { getChildrenToRender } from '../../utils/common';
import './index.less';

var Teams3 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Teams3, _React$PureComponent);

  var _super = _createSuper(Teams3);

  function Teams3() {
    var _this;

    _classCallCheck(this, Teams3);

    _this = _super.apply(this, arguments);

    _this.getBlockChildren = function (data) {
      return data.map(function (item, i) {
        var titleWrapper = item.titleWrapper,
            image = item.image,
            $item = _objectWithoutProperties(item, ["titleWrapper", "image"]);

        return /*#__PURE__*/React.createElement(_Col, _extends({
          key: i.toString()
        }, $item, {
          "data-edit": "Col, titleWrapper"
        }), /*#__PURE__*/React.createElement(_Row, null, /*#__PURE__*/React.createElement(_Col, {
          span: 7
        }, /*#__PURE__*/React.createElement("div", image, /*#__PURE__*/React.createElement("img", {
          src: image.children,
          alt: "img"
        }))), /*#__PURE__*/React.createElement(_Col, {
          span: 17
        }, /*#__PURE__*/React.createElement(QueueAnim, _extends({}, titleWrapper, {
          type: "bottom"
        }), titleWrapper.children.map(getChildrenToRender)))));
      });
    };

    _this.getBlockTopChildren = function (data) {
      return data.map(function (item, i) {
        var titleWrapper = item.titleWrapper,
            $item = _objectWithoutProperties(item, ["titleWrapper"]);

        return /*#__PURE__*/React.createElement(_Col, _extends({
          key: i.toString()
        }, $item, {
          "data-edit": "Col, titleWrapper"
        }), titleWrapper.children.map(getChildrenToRender));
      });
    };

    return _this;
  }

  _createClass(Teams3, [{
    key: "render",
    value: function render() {
      var props = _extends({}, this.props);

      var dataSource = props.dataSource;
      delete props.dataSource;
      delete props.isMobile;
      var staticData = {
        wrapper: {
          className: 'home-page-wrapper teams3-wrapper'
        },
        page: {
          className: 'home-page teams3'
        },
        OverPack: {
          playScale: 0.3,
          className: ''
        },
        titleWrapper: {
          className: 'title-wrapper',
          children: [{
            name: 'title',
            children: this.props.sectionTitle
          }]
        }
      };
      var listChildren = this.getBlockChildren(dataSource.block.children);
      var listTopChildren = this.getBlockTopChildren(dataSource.blockTop.children);
      return /*#__PURE__*/React.createElement("div", _extends({}, props, staticData.wrapper), /*#__PURE__*/React.createElement("div", dataSource.page, /*#__PURE__*/React.createElement("div", _extends({}, staticData.titleWrapper, {
        "data-edit": "titleWrapper"
      }), staticData.titleWrapper.children.map(getChildrenToRender)), /*#__PURE__*/React.createElement(OverPack, staticData.OverPack, /*#__PURE__*/React.createElement(QueueAnim, {
        type: "bottom",
        key: "tween",
        leaveReverse: true
      }, /*#__PURE__*/React.createElement(QueueAnim, _extends({
        type: "bottom",
        key: "blockTop"
      }, dataSource.blockTop, {
        component: _Row,
        "data-edit": "Row"
      }), listTopChildren), /*#__PURE__*/React.createElement(_Divider, {
        key: "divider"
      }), /*#__PURE__*/React.createElement(QueueAnim, _extends({
        type: "bottom",
        key: "block"
      }, dataSource.block, {
        component: _Row,
        "data-edit": "Row"
      }), listChildren)))));
    }
  }]);

  return Teams3;
}(React.PureComponent);

export default Teams3;