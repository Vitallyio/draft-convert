'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rangeSort = require('./util/rangeSort');

var _rangeSort2 = _interopRequireDefault(_rangeSort);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (block) {
  var blockText = [].concat(_toConsumableArray(block.text));

  var entities = block.entityRanges.sort(_rangeSort2.default);
  var styles = block.inlineStyleRanges.sort(_rangeSort2.default);

  return Object.assign({}, block, {
    text: blockText,
    inlineStyleRanges: styles,
    entityRanges: entities
  });
};