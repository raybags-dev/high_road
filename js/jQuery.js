"use strict";

import { pageUnavailable } from "./mentenance_page.js";

$(document).ready(function () {
  console.log("jQuery loaded");

  $(".tour-card").each((index, card) => {
    $(card)
      .delay(500 * index)
      .animate({
        opacity: "1",
      });
  });
  pageUnavailable();

});
