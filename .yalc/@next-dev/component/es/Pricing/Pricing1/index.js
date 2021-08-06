import "antd/es/row/style";
import _Row from "antd/es/row";
import "antd/es/col/style";
import _Col from "antd/es/col";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { getChildrenToRender } from '../../utils/common';
import './index.less';
import { ShoppingCartOutlined } from '@ant-design/icons';

function Pricing1(props) {
  var tagProps = _extends({}, props);

  var staticData = {
    wrapper: {
      className: 'home-page-wrapper pricing0-wrapper'
    },
    OverPack: {
      playScale: 0.3,
      className: 'home-page pricing0'
    },
    imgWrapper: {
      className: 'pricing0-img-wrapper',
      md: 12,
      xs: 24
    },
    img: {
      className: 'pricing0-img',
      name: 'image',
      children: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-8t-lunar.jpg'
    },
    childWrapper: {
      className: 'pricing0-text-wrapper',
      md: 12,
      xs: 24,
      children: [{
        name: 'title',
        children: 'One Plus 8T',
        className: 'pricing0-title'
      }, {
        name: 'content',
        children: "Centralized orchestration of cloud resources, elastic scaling, continuous release and deployment, high availability and disaster tolerance. A complete cloud security system built in accordance with the security requirements of financial enterprises to fully guarantee the security of financial applications and data. <br/>\n      500-5Gbps, 10 GB-50TB (inclusive), 1TB flow package, domestic peak value.\n      ",
        className: 'pricing0-content'
      }, {
        name: 'pricing',
        children: '$2,200',
        className: 'pricing0-pricing'
      }, {
        name: 'button',
        children: {
          icon: /*#__PURE__*/React.createElement(ShoppingCartOutlined, null),
          href: '#',
          type: 'primary',
          children: 'Buy Now'
        }
      }]
    }
  };
  var _tagProps$dataSource = tagProps.dataSource,
      dataSource = _tagProps$dataSource === void 0 ? staticData : _tagProps$dataSource,
      isMobile = tagProps.isMobile;
  delete tagProps.dataSource;
  delete tagProps.isMobile;
  var animType = {
    queue: isMobile ? 'bottom' : 'right',
    one: isMobile ? {
      scaleY: '+=0.3',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad'
    } : {
      x: '-=30',
      opacity: 0,
      type: 'from',
      ease: 'easeOutQuad'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, tagProps, dataSource.wrapper), /*#__PURE__*/React.createElement(OverPack, _extends({
    component: _Row
  }, dataSource.OverPack, {
    "data-edit": "Row,OverPack"
  }), /*#__PURE__*/React.createElement(TweenOne, _extends({
    key: "img",
    animation: animType.one,
    resetStyle: true
  }, dataSource.imgWrapper, {
    component: _Col,
    componentProps: {
      md: dataSource.imgWrapper.md,
      xs: dataSource.imgWrapper.xs
    },
    "data-edit": "Col"
  }), /*#__PURE__*/React.createElement("span", dataSource.img, /*#__PURE__*/React.createElement("img", {
    src: dataSource.img.children,
    width: "100%",
    alt: "img"
  }))), /*#__PURE__*/React.createElement(QueueAnim, _extends({
    key: "text",
    type: animType.queue,
    leaveReverse: true,
    ease: ['easeOutQuad', 'easeInQuad']
  }, dataSource.childWrapper, {
    component: _Col,
    componentProps: {
      md: dataSource.childWrapper.md,
      xs: dataSource.childWrapper.xs
    },
    "data-edit": "Col,childWrapper"
  }), dataSource.childWrapper.children.map(getChildrenToRender))));
}

export default Pricing1;