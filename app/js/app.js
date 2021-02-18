$(document).ready(function() {

  // Табы
	$(".tab__header-item").on("click", function (e) {
		e.preventDefault();
    var $this = $(this);
    if ($this.hasClass("tab__header-item--active")) {
      return false;
    } else {
      $this.siblings().removeClass("tab__header-item--active");
      $this
        .addClass("tab__header-item--active")
        .closest(".tab")
        .find(".tab__content")
        .children()
        .removeClass("tab__content-item--active")
        .eq($(this).index())
        .addClass("tab__content-item--active");
      console.log(22);
    }
  });

  // если текст подсказки 999+, жлемент смещается на 5px чтобы не закрывать иконку
  $('.badges__span-badge').each(function() {
    if($(this).text() === '999+') {
      $(this).css('transform', 'translateX(5px)')
    }
  })
})
