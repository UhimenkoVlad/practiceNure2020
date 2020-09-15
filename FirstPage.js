var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import SecondPage from "./SecondPage";

var FirstPage = function (_React$Component) {
    _inherits(FirstPage, _React$Component);

    function FirstPage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FirstPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FirstPage.__proto__ || Object.getPrototypeOf(FirstPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            stage: 1,
            value: ''
        }, _this.goNextStage = function () {
            _this.setState({
                stage: _this.state.stage + 1
            });
        }, _this.handChange = function (event) {
            _this.setState({
                value: event.target.value
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FirstPage, [{
        key: "handleSubmit",
        value: function handleSubmit(event) {
            alert('Отправленное имя: ' + this.state.value);
            event.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var stage = this.state.stage;
            var value = this.state.value;

            return stage === 1 ? React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement(
                        "label",
                        null,
                        "\u0418\u043C\u044F:",
                        React.createElement("input", { type: "text", name: "name", value: value, onChange: this.handChange })
                    ),
                    React.createElement(
                        "button",
                        { onClick: function onClick() {
                                return _this2.goNextStage(stage);
                            } },
                        "\u0414\u0430\u043B\u0435\u0435"
                    )
                )
            ) : React.createElement(
                "div",
                null,
                React.createElement(SecondPage, { name: value })
            );
        }
    }]);

    return FirstPage;
}(React.Component);

export default FirstPage;