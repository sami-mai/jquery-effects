// Show Walrus
// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-showing").show();
//     $(".walrus-hidden").hide();
//   });
// });
//
// // Hide Walrus again
// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-hidden").hide();
//     // $("img").hide();
//   });
// });

// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $(".walrus-showing").toggle();
//     $("img").toggle();
//     $(".walrus-hidden").toggle();
//   });
// });

$(document).ready(function() {
  $(".clickable").click(function() {
    $("img").toggle();
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});
