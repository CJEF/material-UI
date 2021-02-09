$(document).ready(function() {
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
})
