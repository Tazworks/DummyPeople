"use strict";

var _people = require("./people");

var _people2 = _interopRequireDefault(_people);

var _lodash = require("lodash");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  inList: function inList(data, value) {
    var flag = false;
    for (var i = 0; i < data.length; i++) {
      if (data[i]["value"] === value) {
        flag = true;
        break;
      }
    }
    return flag;
  },
  filterPage: function filterPage(_ref) {
    var _this = this;

    var column = _ref.column,
        filter = _ref.filter;

    var data = [];
    (0, _lodash.cloneDeep)(_people2.default).forEach(function (person) {
      if ((0, _lodash.isNil)(filter) || (0, _lodash.isEmpty)(filter) || person[column].indexOf(filter) > -1) {
        if (!_this.inList(data, person[column])) {
          data.push({
            id: person.id,
            value: person[column]
          });
        }
      }
    });

    return {
      total: data.length,
      data: (0, _lodash.orderBy)(data, ["value"], ["asc"]).slice(0, 10)
    };
  },
  page: function page(_ref2) {
    var filters = _ref2.filters,
        page = _ref2.page,
        sortCol = _ref2.sortCol,
        sortDir = _ref2.sortDir;

    var start = (page - 1) * 10;
    var end = page * 10;
    var data = (0, _lodash.filter)(_people2.default, function (person) {
      var flag = true;
      filters.forEach(function (_ref3) {
        var name = _ref3.name,
            values = _ref3.values;

        var matches = false;
        if (!(0, _lodash.isNil)(person[name])) {
          values.forEach(function (value) {
            if (person[name].indexOf(value) > -1) {
              matches = true;
            }
          });
        } else {
          for (var key in person) {
            if (typeof person[key] === "string" && person[key].indexOf(values[0]) > -1) {
              matches = true;
            }
          }
        }
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