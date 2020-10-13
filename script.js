// Wait till the DOM is ready.
$(function () {
  var roles = [
    "Student",
    "Cat Lover",
    "VITian",
    "Photographer",
    "Dancer",
    "Programmer(soon!)"
  ];
  var count = 0;
  var $typeSpan = $("#intro .content h2 span").typist({
    text: roles[count]
  });
  setInterval(() => {
    $typeSpan
      .typistRemove(roles[count++ % roles.length].length)
      .typistPause(2500)
      .typistAdd(roles[count % roles.length]);
  }, 5000);
  $(".navbar").hide();
  $(window).scroll(function () {
    if ($(window).scrollTop() > 40) {
      $(".navbar").slideDown(100);
    } else {
      $(".navbar").slideUp(100);
    }
  });
});
