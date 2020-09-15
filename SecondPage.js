var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";

var SecondPage = function (_React$Component) {
    _inherits(SecondPage, _React$Component);

    function SecondPage() {
        _classCallCheck(this, SecondPage);

        return _possibleConstructorReturn(this, (SecondPage.__proto__ || Object.getPrototypeOf(SecondPage)).apply(this, arguments));
    }

    _createClass(SecondPage, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                alert("\u041F\u0440\u0438\u0432\u0435\u0442 " + this.props.name + "!"),
                React.createElement(
                    "h1",
                    null,
                    "\u041C\u0435\u043D\u044E"
                )
            );
        }
    }]);

    return SecondPage;
}(React.Component);

export default SecondPage;