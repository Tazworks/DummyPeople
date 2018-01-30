"use strict";

var _people = require("./people");

var _people2 = _interopRequireDefault(_people);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  page: function page(_ref) {
    var filters = _ref.filters,
        _page = _ref.page,
        sortCol = _ref.sortCol,
        sortDir = _ref.sortDir;

    var start = (_page - 1) * 10;
    var end = _page * 10;
    var data = (0, _lodash.filter)(_people2.default, function (person) {
      var flag = true;
      filters.forEach(function (_ref2) {
        var name = _ref2.name,
            values = _ref2.values;

        var matches = false;
        values.forEach(function (value) {
          if (person[name].indexOf(value) > -1) {
            matches = true;
          }
        });
        if (!matches) {
          flag = false;
        }
      });

      return flag;
    });
    return {
      total: data.length,
      data: (0, _lodash.orderBy)(data, [sortCol], [sortDir]).slice(start, end)
    };
  }
};