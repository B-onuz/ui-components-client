"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var usePagination = function usePagination() {
  var handleChangeNext = function handleChangeNext() {
    var nextPage = currentPage + 1;

    if (nextPage <= (((data || {}).services || {}).pagination || {}).pagesAmount || 0) {
      setCurrentPage(nextPage);
    }
  };

  var handleChangePrev = function handleChangePrev() {
    var prevPage = currentPage - 1;

    if (prevPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
};

var _default = usePagination;
exports["default"] = _default;
module.exports = exports.default;