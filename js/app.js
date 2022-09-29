new Swiper('.fullscrin-swiper', {

// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
keyboard: {
	// вкл/выкл
	enabled: true,
	// только когда слайдер в пределах видимости
	onlyInViewport: true,
},

clickable: true,
// Бесконечный слайдер
loop: true,

// Переключение при клике на слайд
slideToClickedSlide: true,

// Навигация по хешу
hashNavigation: {
	// Отслеживать состояние
	watchState: true,
},

// Скорость
speed: 4000,


// Автопрокрутка
autoplay: {
	delay: 5000,
	// Закончить на последнем слайде
	// stopOnLastSlide: true,
	// Отключить после ручного переключения
	disableOnInteraction: false
},
// Ленивая подгрузка
lazy: {
	loadPrevNext: true,
},
});


// Burger
$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger,.header-menu').toggleClass('burger-active');
		$('.offcanvas-menu-overlay').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$(".offcanvas-menu-overlay").click(function(event) {
		$(".offcanvas-menu-overlay").removeClass("active");
		$(".header-menu").removeClass("burger-active");
		$(".header-burger").removeClass("burger-active::before, burger-active::after, burger-active span");
		$('body').toggleClass('lock');
		$("html, body").css("overflow", "");
	 });
 });

// Scroll
window.addEventListener('scroll', e => {
	let header = document.getElementById('header').classList;
	let active_class = "header__scrolled";

	if(pageYOffset > 250) header.add(active_class)
	else header.remove(active_class)
 })








// Tabs
// const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
// const tabsItems = document.querySelectorAll(".price-bottom__item");


// tabsBtn.forEach(onTabClick);
// function onTabClick(item) {
//     item.addEventListener("click", function() {
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute("data-tab");
//         let currentTab = document.querySelector(tabId);


//         if( ! currentBtn.classList.contains('tabs-active') ) {
//             tabsBtn.forEach(function(item) {
//                 item.classList.remove('tabs-active');
//             });
    
//             tabsItems.forEach(function(item) {
//                 item.classList.remove('tabs-active');
//             });
    
//             currentBtn.classList.add('tabs-active');
//             currentTab.classList.add('tabs-active');
//         };

//     });
// }
// document.querySelector('.tabs__nav-btn').click();