"use strict";

import { pageUnavailable } from "./mentenance_page.js";

$(function () {
  console.log("jQuery loaded");
  $(".main-card").each((index, card) => {
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

  // Top icon
  const div = $("<div></div>").attr("class", "to-top");
  const top_icon = $("<i></i>").attr({
    class: "fas fa-arrow-up to-top-arrow",
  });
  $(div).append(top_icon);
  $("body").append(div);

  // Show hide top btn handler
  // hide show top button on scroll
  function showHideTopBtn() {
    if ($(window).scrollTop() > 200) {
      $(".to-top").css({ opacity: 1 });
    } else {
      $(".to-top").css({ opacity: 0 });
    }
  }

  // back to top on handler
  // handle Smooth scrolling helper
  const handlePageScroll = () => {
    let target = $("body");
    $("body, html").animate({ scrollTop: $(target).offset().top }, 500);
    return false;
  };

  $(".to-top").on("click", handlePageScroll);

  $(window).on("scroll", showHideTopBtn);
  // pageUnavailable();
});
