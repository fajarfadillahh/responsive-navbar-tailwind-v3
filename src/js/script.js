$(document).ready(function () {
  $(".nav-toggle").each((_, navToggle) => {
    var target = $(navToggle).data("target");

    $(navToggle).on("click", () => {
      $(target).animate({
        height: "toggle",
      });
    });
  });
});
