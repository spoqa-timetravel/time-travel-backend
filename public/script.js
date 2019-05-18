$(document).ready(function() {
$(".data").each(function() {
    var max = $(this).text();
    $(this)
      .prop("Counter", 100)
      .animate({ Counter: max.replace(/,/g, "") }, {
          duration: 1000000,
          easing: "swing",
          step: function(now) {
            $(this).text(parseInt(Math.random(now) * max));
          }
        }
      );
  });
});