function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/table/style";
import _Table from "antd/es/table";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { getChildrenToRender, isImg } from '../../utils/common';
import './index.less';

var Pricing3 = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Pricing3, _React$PureComponent);

  var _super = _createSuper(Pricing3);

  function Pricing3() {
    var _this;

    _classCallCheck(this, Pricing3);

    _this = _super.apply(this, arguments);

    _this.getColumns = function (columns) {
      return columns.map(function (item) {
        var childWrapper = item.childWrapper,
            $item = _objectWithoutProperties(item, ["childWrapper"]);

        return _objectSpread(_objectSpread({
          align: 'center'
        }, $item), {}, {
          title: /*#__PURE__*/React.createElement("div", _extends({}, childWrapper, {
            "data-edit": "childWrapper"
          }), childWrapper.children.map(getChildrenToRender))
        });
      });
    };

    _this.getDataSource = function (dataSource, columns) {
      return dataSource.map(function (item, i) {
        var obj = {
          key: i.toString()
        };
        item.children.forEach(function ($item, ii) {
          if (columns[ii]) {
            obj[columns[ii].key] = /*#__PURE__*/React.createElement("div", _extends({}, $item, {
              "data-edit": "text,image"
            }), typeof $item.children === 'string' && $item.children.match(isImg) ? /*#__PURE__*/React.createElement("img", {
              src: $item.children,
              alt: "img"
            }) : /*#__PURE__*/React.createElement('span', {
              dangerouslySetInnerHTML: {
                __html: $item.children
              }
            }));
          }
        });
        return obj;
      });
    };

    _this.getMobileChild = function (table) {
      var columns = table.columns,
          dataSource = table.dataSource,
          tableProps = _objectWithoutProperties(table, ["columns", "dataSource"]);

      var names = columns.children.filter(function (item) {
        return item.key.indexOf('name') >= 0;
      });
      var newColumns = columns.children.filter(function (item) {
        return item.key.indexOf('name') === -1;
      });
      return newColumns.map(function (item, i) {
        var items = [].concat(names[0], item).filter(function (c) {
          return c;
        });

        if (items.length > 1) {
          items[0].colSpan = 0;
          items[1].colSpan = 2;
        }

        var dataSources = dataSource.children.map(function ($item) {
          var child = $item.children.filter(function (c) {
            return c.name.indexOf('name') === -1;
          });
          var n = $item.children.filter(function (c) {
            return c.name.indexOf('name') >= 0;
          });
          return _objectSpread(_objectSpread({}, $item), {}, {
            children: [].concat(n[0], child[i]).filter(function (c) {
              return c;
            })
          });
        });

        var props = _objectSpread(_objectSpread({}, tableProps), {}, {
          columns: _this.getColumns(items),
          dataSource: _this.getDataSource(dataSources, items)
        });

        return /*#__PURE__*/React.createElement(_Table, _extends({
          key: i.toString()
        }, props, {
          pagination: false,
          bordered: true
        }));
      });
    };

    return _this;
  }

  _createClass(Pricing3, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$dataSourc = _this$props.dataSource,
          dataSource = _this$props$dataSourc === void 0 ? {
        wrapper: {
          className: 'home-page-wrapper pricing2-wrapper'
        },
        page: {
          className: 'home-page pricing2'
        },
        OverPack: {
          playScale: 0.3,
          className: 'pricing2-content-wrapper'
        },
        titleWrapper: {
          className: 'pricing2-title-wrapper',
          children: [{
            name: 'title',
            children: 'Price list',
            className: 'pricing2-title-h1'
          }]
        },
        Table: {
          name: 'tabsTitle',
          size: 'default',
          className: 'pricing2-table',
          columns: {
            children: [{
              dataIndex: 'name',
              key: 'name',
              name: 'empty',
              childWrapper: {
                children: [{
                  name: 'name',
                  children: ' '
                }, {
                  name: 'content',
                  children: ' '
                }]
              }
            }, {
              dataIndex: 'free',
              key: 'free',
              name: 'free',
              childWrapper: {
                className: 'pricing2-table-name-block',
                children: [{
                  name: 'name',
                  className: 'pricing2-table-name',
                  children: 'Free'
                }, {
                  name: 'content',
                  className: 'pricing2-table-money',
                  children: '$0'
                }, {
                  name: 'button',
                  children: {
                    href: '#',
                    children: 'Free trial'
                  }
                }]
              }
            }, {
              dataIndex: 'basic',
              key: 'basic',
              name: 'basic',
              childWrapper: {
                className: 'pricing2-table-name-block',
                children: [{
                  name: 'name',
                  className: 'pricing2-table-name',
                  children: 'Basic'
                }, {
                  name: 'content',
                  className: 'pricing2-table-money',
                  children: '$550'
                }, {
                  name: 'button',
                  children: {
                    href: '#',
                    children: 'Buy now'
                  }
                }]
              }
            }, {
              dataIndex: 'pro',
              key: 'pro',
              name: 'pro',
              childWrapper: {
                className: 'pricing2-table-name-block',
                children: [{
                  name: 'name',
                  className: 'pricing2-table-name',
                  children: 'Pro'
                }, {
                  name: 'content',
                  className: 'pricing2-table-money',
                  children: '$2,200'
                }, {
                  name: 'button',
                  children: {
                    href: '#',
                    type: 'primary',
                    children: 'Buy now'
                  }
                }]
              }
            }, {
              dataIndex: 'unlimited',
              key: 'unlimited',
              name: 'unlimited',
              childWrapper: {
                className: 'pricing2-table-name-block',
                children: [{
                  name: 'name',
                  className: 'pricing2-table-name',
                  children: 'Unlimited'
                }, {
                  name: 'content',
                  className: 'pricing2-table-money',
                  children: '$5,600'
                }, {
                  name: 'button',
                  children: {
                    href: '#',
                    children: 'Buy now'
                  }
                }]
              }
            }]
          },
          dataSource: {
            children: [{
              name: 'list0',
              children: [{
                className: 'pricing2-table-content-name',
                name: 'name',
                children: 'Example series1'
              }, {
                children: 'Limited',
                name: 'content0',
                className: 'pricing2-table-content'
              }, {
                children: 'Unlimited',
                name: 'content1',
                className: 'pricing2-table-content'
              }, {
                children: 'Unlimited',
                name: 'content2',
                className: 'pricing2-table-content'
              }, {
                children: 'Unlimited',
                name: 'content3',
                className: 'pricing2-table-content'
              }]
            }, {
              name: 'list1',
              children: [{
                className: 'pricing2-table-content-name',
                name: 'name',
                children: 'Example series2'
              }, {
                children: 'Limited',
                name: 'content0',
                className: 'pricing2-table-content'
              }, {
                children: 'Unlimited',
                name: 'content1',
                className: 'pricing2-table-content'
              }, {
                children: 'Unlimited',
                name: 'content2',
                className: 'pricing2-table-content'
              }, {
                children: 'Unlimited',
                name: 'content3',
                className: 'pricing2-table-content'
              }]
            }, {
              name: 'list2',
              children: [{
                className: 'pricing2-table-content-name',
                name: 'name',
                children: 'Fixed broadband billing'
              }, {
                name: 'content0',
                children: '50GB',
                className: 'pricing2-table-content'
              }, {
                name: 'content1',
                children: '250GB',
                className: 'pricing2-table-content'
              }, {
                name: 'content2',
                children: '600GB',
                className: 'pricing2-table-content'
              }, {
                name: 'content3',
                children: 'Unlimited',
                className: 'pricing2-table-content'
              }]
            }, {
              name: 'list3',
              children: [{
                className: 'pricing2-table-content-name',
                name: 'name',
                children: 'Idle load balancing'
              }, {
                children: '-',
                name: 'content0',
                className: 'pricing2-table-content'
              }, {
                name: 'content1',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                className: 'pricing2-table-content'
              }, {
                name: 'content2',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                className: 'pricing2-table-content'
              }, {
                name: 'content3',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                className: 'pricing2-table-content'
              }]
            }, {
              name: 'list4',
              children: [{
                className: 'pricing2-table-content-name',
                name: 'name',
                children: '4nuclear'
              }, {
                name: 'content0',
                children: '-',
                className: 'pricing2-table-content'
              }, {
                name: 'content1',
                children: '-',
                className: 'pricing2-table-content'
              }, {
                name: 'content2',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                className: 'pricing2-table-content'
              }, {
                name: 'content3',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                className: 'pricing2-table-content'
              }]
            }, {
              name: 'list5',
              children: [{
                className: 'pricing2-table-content-name',
                name: 'name',
                children: 'System disk (linear billing)'
              }, {
                name: 'content0',
                children: '-',
                className: 'pricing2-table-content'
              }, {
                name: 'content1',
                children: '-',
                className: 'pricing2-table-content'
              }, {
                name: 'content2',
                children: '-',
                className: 'pricing2-table-content'
              }, {
                name: 'content3',
                children: 'https://gw.alipayobjects.com/zos/basement_prod/14ce3060-34e6-4b30-9a45-1a6b95542310.svg',
                className: 'pricing2-table-content'
              }]
            }]
          }
        }
      } : _this$props$dataSourc,
          isMobile = _this$props.isMobile,
          props = _objectWithoutProperties(_this$props, ["dataSource", "isMobile"]);

      var table = dataSource.Table,
          wrapper = dataSource.wrapper,
          page = dataSource.page,
          titleWrapper = dataSource.titleWrapper;

      var columns = table.columns,
          tableData = table.dataSource,
          $table = _objectWithoutProperties(table, ["columns", "dataSource"]);

      var tableProps = _objectSpread(_objectSpread({}, $table), {}, {
        columns: this.getColumns(columns.children),
        dataSource: this.getDataSource(tableData.children, columns.children)
      });

      var childrenToRender = isMobile ? this.getMobileChild(table) : /*#__PURE__*/React.createElement(_Table, _extends({
        key: "table"
      }, tableProps, {
        pagination: false,
        bordered: true
      }));
      return /*#__PURE__*/React.createElement("div", _extends({}, props, wrapper), /*#__PURE__*/React.createElement("div", page, /*#__PURE__*/React.createElement("div", _extends({
        key: "title"
      }, titleWrapper, {
        "data-edit": "titleWrapper"
      }), titleWrapper.children.map(getChildrenToRender)), /*#__PURE__*/React.createElement(OverPack, dataSource.OverPack, /*#__PURE__*/React.createElement(QueueAnim, {
        type: "bottom",
        leaveReverse: true,
        ease: ['easeOutQuad', 'easeInOutQuad'],
        key: "content"
      }, childrenToRender))));
    }
  }]);

  return Pricing3;
}(React.PureComponent);

export default Pricing3;