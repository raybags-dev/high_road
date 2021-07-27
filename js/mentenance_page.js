"use strict"
  // =====page mentenence code =====//
const pageUnavailable = () => {
    const body = $("body");
    const div = $("<div></div").attr("class", "mentenance-page-wrapper");

    const main_heading = $("<h1></h1").text("Projects").attr({class: "main-heading"});
    const heading = $("<h2></h2").text("Page under maintenance").attr({class: "sub-heading"});
    const paragraph = $("<p></p").text("The page will be ready soon. Please visit the page later").attr({class: "details"});
    const link      = $("<a>").text("back home").attr({href: "https://raybags.com", target: "_blank", class: "back-home-link"})

    div.append(main_heading, heading, paragraph, link);
    body.append(div);
    console.log(div);
  };
  // =====page mentenence code=====//

  export { pageUnavailable };
