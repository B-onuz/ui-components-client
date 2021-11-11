"use strict";

exports.__esModule = true;
exports["default"] = formatDate;

function formatDate(date) {
  var dateToFormat = new Date(date);
  var formattedDate = dateToFormat.toLocaleDateString('pt-br', {
    hour: 'numeric',
    minute: 'numeric'
  });
  return formattedDate;
}

module.exports = exports.default;