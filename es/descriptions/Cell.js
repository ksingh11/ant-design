import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as React from 'react';
import classNames from 'classnames';

function notEmpty(val) {
  return val !== undefined && val !== null;
}

var Cell = function Cell(_ref) {
  var itemPrefixCls = _ref.itemPrefixCls,
      component = _ref.component,
      span = _ref.span,
      className = _ref.className,
      style = _ref.style,
      bordered = _ref.bordered,
      label = _ref.label,
      content = _ref.content,
      colon = _ref.colon;
  var Component = component;

  if (bordered) {
    var _classNames;

    return /*#__PURE__*/React.createElement(Component, {
      className: classNames((_classNames = {}, _defineProperty(_classNames, "".concat(itemPrefixCls, "-item-label"), notEmpty(label)), _defineProperty(_classNames, "".concat(itemPrefixCls, "-item-content"), notEmpty(content)), _classNames), className),
      style: style,
      colSpan: span
    }, notEmpty(label) ? label : content);
  }

  return /*#__PURE__*/React.createElement(Component, {
    className: classNames("".concat(itemPrefixCls, "-item"), className),
    style: style,
    colSpan: span
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(itemPrefixCls, "-item-container")
  }, label && /*#__PURE__*/React.createElement("span", {
    className: classNames("".concat(itemPrefixCls, "-item-label"), _defineProperty({}, "".concat(itemPrefixCls, "-item-no-colon"), !colon))
  }, label), content && /*#__PURE__*/React.createElement("span", {
    className: classNames("".concat(itemPrefixCls, "-item-content"))
  }, content)));
};

export default Cell;