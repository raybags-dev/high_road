"use strict";

import { pageUnavailable } from "./mentenance_page.js";

$(function () {
  console.log("jQuery loaded");

  $(".tour-card").each((index, card) => {
    $(card)
      .delay(500 * index)
      .animate({
        opacity: 1,
      });
  });
  $(".back-home-icon a").attr({
    href: "https://raybags.com",
    target: "_blank",
  });
  // pageUnavailable();
});
