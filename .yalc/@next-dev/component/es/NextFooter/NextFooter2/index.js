function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { memo } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import './index.less';
export var NextFooter2 = /*#__PURE__*/memo(function (props) {
  var dataSource = props.dataSource;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: "home-page-wrapper footer0-wrapper"
  }), /*#__PURE__*/React.createElement(OverPack, {
    className: 'home-page footer0',
    playScale: 0.05
  }, /*#__PURE__*/React.createElement(TweenOne, _extends({
    animation: {
      y: '+=30',
      opacity: 0,
      type: 'from'
    },
    key: "footer"
  }, dataSource.copyright), /*#__PURE__*/React.createElement('span', {
    dangerouslySetInnerHTML: {
      __html: dataSource.copyright.children
    }
  }))));
});