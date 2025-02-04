import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _typeof from "@babel/runtime/helpers/typeof";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import * as React from 'react';
import classNames from 'classnames';
import { ConfigContext } from '../config-provider';
import RowContext from './RowContext';
import { tuple } from '../_util/type';
import ResponsiveObserve, { responsiveArray } from '../_util/responsiveObserve';
var RowAligns = tuple('top', 'middle', 'bottom', 'stretch');
var RowJustify = tuple('start', 'end', 'center', 'space-around', 'space-between');
var Row = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames;

  var customizePrefixCls = props.prefixCls,
      justify = props.justify,
      align = props.align,
      className = props.className,
      style = props.style,
      children = props.children,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 0 : _props$gutter,
      wrap = props.wrap,
      others = __rest(props, ["prefixCls", "justify", "align", "className", "style", "children", "gutter", "wrap"]);

  var _React$useContext = React.useContext(ConfigContext),
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      screens = _React$useState2[0],
      setScreens = _React$useState2[1];

  var gutterRef = React.useRef(gutter);
  React.useEffect(function () {
    var token = ResponsiveObserve.subscribe(function (screen) {
      var currentGutter = gutterRef.current || 0;

      if (!Array.isArray(currentGutter) && _typeof(currentGutter) === 'object' || Array.isArray(currentGutter) && (_typeof(currentGutter[0]) === 'object' || _typeof(currentGutter[1]) === 'object')) {
        setScreens(screen);
      }
    });
    return function () {
      return ResponsiveObserve.unsubscribe(token);
    };
  }, []);

  var getGutter = function getGutter() {
    var results = [0, 0];
    var normalizedGutter = Array.isArray(gutter) ? gutter : [gutter, 0];
    normalizedGutter.forEach(function (g, index) {
      if (_typeof(g) === 'object') {
        for (var i = 0; i < responsiveArray.length; i++) {
          var breakpoint = responsiveArray[i];

          if (screens[breakpoint] && g[breakpoint] !== undefined) {
            results[index] = g[breakpoint];
            break;
          }
        }
      } else {
        results[index] = g || 0;
      }
    });
    return results;
  };

  var prefixCls = getPrefixCls('row', customizePrefixCls);
  var gutters = getGutter();
  var classes = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-no-wrap"), wrap === false), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(justify), justify), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(align), align), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === 'rtl'), _classNames), className);

  var rowStyle = _extends(_extends(_extends({}, gutters[0] > 0 ? {
    marginLeft: gutters[0] / -2,
    marginRight: gutters[0] / -2
  } : {}), gutters[1] > 0 ? {
    marginTop: gutters[1] / -2,
    marginBottom: gutters[1] / 2
  } : {}), style);

  return /*#__PURE__*/React.createElement(RowContext.Provider, {
    value: {
      gutter: gutters,
      wrap: wrap
    }
  }, /*#__PURE__*/React.createElement("div", _extends({}, others, {
    className: classes,
    style: rowStyle,
    ref: ref
  }), children));
});
Row.displayName = 'Row';
export default Row;