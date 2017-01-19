$('.ourGames').hover(function() {
  $(this).css("cursor", "pointer");
  $(this).animate({
      width: "150%",
      height: "150%"
  }, 'slow');

}, function() {
  $(this).animate({
      width: "100%"
  }, 'slow');
});
