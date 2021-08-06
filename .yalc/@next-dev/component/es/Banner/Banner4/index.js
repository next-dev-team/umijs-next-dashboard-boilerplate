function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/button/style";
import _Button from "antd/es/button";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
import QueueAnim from 'rc-queue-anim';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import './index.less';

var Banner = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Banner, _React$PureComponent);

  var _super = _createSuper(Banner);

  function Banner() {
    _classCallCheck(this, Banner);

    return _super.apply(this, arguments);
  }

  _createClass(Banner, [{
    key: "render",
    value: function render() {
      var currentProps = _extends({}, this.props);

      var _currentProps$dataSou = currentProps.dataSource,
          dataSource = _currentProps$dataSou === void 0 ? {
        wrapper: {
          className: 'banner3'
        },
        textWrapper: {
          className: 'banner3-text-wrapper',
          children: [{
            name: 'nameEn',
            className: 'banner3-name-en',
            children: 'Seeking Experience & Engineering Conference'
          }, {
            name: 'slogan',
            className: 'banner3-slogan',
            children: '首届蚂蚁金服体验科技大会',
            texty: true
          }, {
            name: 'name',
            className: 'banner3-name',
            children: '探索极致用户体验与最佳工程实践探索'
          }, {
            name: 'button',
            className: 'banner3-button',
            children: '立即报名'
          }, {
            name: 'time',
            className: 'banner3-time',
            children: '2018.01.06 / 中国·杭州'
          }]
        }
      } : _currentProps$dataSou;
      delete currentProps.dataSource;
      delete currentProps.isMobile;
      var children = dataSource.textWrapper.children.map(function (item) {
        var name = item.name,
            texty = item.texty,
            $item = _objectWithoutProperties(item, ["name", "texty"]);

        if (name.match('button')) {
          return /*#__PURE__*/React.createElement(_Button, _extends({
            type: "primary",
            key: name
          }, $item, {
            "data-edit": "link,text"
          }), /*#__PURE__*/React.createElement('span', {
            dangerouslySetInnerHTML: {
              __html: item.children
            }
          }));
        }

        if (texty) {
          $item['data-edit'] = 'texty';
        }

        return /*#__PURE__*/React.createElement("div", _extends({
          key: name
        }, $item), texty ? /*#__PURE__*/React.createElement(Texty, {
          type: "mask-bottom"
        }, item.children) : /*#__PURE__*/React.createElement('span', {
          dangerouslySetInnerHTML: {
            __html: item.children
          }
        }));
      });
      return /*#__PURE__*/React.createElement("div", _extends({}, currentProps, dataSource.wrapper), /*#__PURE__*/React.createElement(QueueAnim, _extends({
        key: "QueueAnim",
        type: ['bottom', 'top'],
        delay: 200
      }, dataSource.textWrapper), children));
    }
  }]);

  return Banner;
}(React.PureComponent);

export default Banner;