$('ul li a').bind('click', function () {
  $('ul li a').removeClass('active');
  $(this).addClass('active');
});

$(document).ready(function () {
  $('article').waypoint(function (event, direction) {
    var id = $(this).attr('id');
    $('ul li a').removeClass('active');
    $('ul li a[href="#' + id + '"]').addClass('active');
  });
});
