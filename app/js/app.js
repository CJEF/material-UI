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

// $("input").each(function(element) {
//   element.on('blur', function(e) {
//     if(e.target.val()) {
//       console.log(e.target.val());
//       e.target.addClass('dirty');
//     } else {
//       e.target.removeClass('dirty');
//     }
//   })
// })

$(".default-value").click(function () {

  const wrapper = $(this).closest(".textfield-select");
  const tabUl = wrapper.find(".textfield-select__body");

  tabUl.toggleClass("active");
});

 $(".textfield-select__item").on("click", function () {
   // console.log($(this).text());
   const wrapper = $(this).closest(".textfield-select");
   const tabTitle = wrapper.find(".default-value");
   // const tabTitleText = tabTitle.find(".tabs__base-div");
   const tabUl = wrapper.find(".textfield-select__body");
   tabTitle.text($(this).text());
   tabUl.removeClass("active");
 });
