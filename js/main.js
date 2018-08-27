$('.menu__item a').click(function(e){
  e.preventDefault();
  var $this = $(this);
  var target = $this.attr('href');
  $(target).addClass('active');
});

$('.close-modal').click(function(e){
  $('.modal').removeClass('active');
  $('.modal__item').removeClass('active');
})