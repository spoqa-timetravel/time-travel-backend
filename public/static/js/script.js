$(document).ready(function() {
    var arr1 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    arr1.forEach(function(currentItem, index) {
      $("ul.hours").append("<li>" + currentItem + "</li>");
      $(".minutes,.seconds").append("<li>" + currentItem * 5 + "</li>");
    });
  });
  