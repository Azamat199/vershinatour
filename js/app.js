lightGallery(document.querySelector('.gallery__row'));
// lightGallery(document.querySelector('.swiper-wrapper'));

var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
		 loop: true,
		loopedSlides: 4,

		// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},
		// Отключить предзагрузку картинок
		preloadImages: false,
		// Ленивая подгрузка
		lazy: {
			// Подгружать на старте переключения слайда
			loadOnTransitionStart: true,
			// Подгрузить предыдущую и следующую картинки
			loadPrevNext: false,
		},
		// Слежка за видимыми слайдами
		watchSlidesProgress: true,
		// Добавление класса видимым слайдам
		watchSlidesVisibility: true,
 });
 var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 'auto',
	touchRatio: 0.2,
	slideToClickedSlide: true,
	loop: true,
	loopedSlides: 4,
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		420: {
			slidesPerView: 2,
		},
		500: {
			slidesPerView: 3,
		},
		730: {
			slidesPerView: 4,
		},
	},

	
 });
 galleryTop.controller.control = galleryThumbs;
 galleryThumbs.controller.control = galleryTop;

new Swiper('.main-excursions__swiper', {
	// СТРЕЛКИ
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},

	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
	keyboard: {
		// вкл/выкл
		enabled: true,
	},
	// Количество слайдов для показа
	slidesPerView: 4,
	// Эффект потока
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		stretch: 5,
		slideShadow: false,
	},

	// Отступ между слайдами
	spaceBetween: 20,

	loop: true,
	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
		},
		850: {
			slidesPerView: 3,
		},
		1080: {
			slidesPerView: 4,
		},
	},
		// Навигация по хешу
		hashNavigation: {
			// Отслеживать состояние
			watchState: true,
		},
		// Отключить предзагрузку картинок
		preloadImages: false,
		// Ленивая подгрузка
		lazy: {
			// Подгружать на старте переключения слайда
			loadOnTransitionStart: true,
			// Подгрузить предыдущую и следующую картинки
			loadPrevNext: false,
		},
		// Слежка за видимыми слайдами
		watchSlidesProgress: true,
		// Добавление класса видимым слайдам
		watchSlidesVisibility: true,

});
new Swiper('.main-excursions__swiper-excursions', {
	// СТРЕЛКИ
	navigation: {
		nextEl: '.swiper-button-next-1',
		prevEl: '.swiper-button-prev-1'
	},

	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	// УПРАВЛЕНИЕ КЛАВИАТУРОЙ
	keyboard: {
		// вкл/выкл
		enabled: true,
	},
	// Количество слайдов для показа
	slidesPerView: 4,
	// Эффект потока
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 20,
		stretch: 0,
		slideShadow: false,
	},

	// Отступ между слайдами
	spaceBetween: 20,

	loop: true,
	// Брейк поинты (адаптив)
	// Ширина экрана
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		550: {
			slidesPerView: 2,
		},
		850: {
			slidesPerView: 3,
		},
		1080: {
			slidesPerView: 4,
		},
	},
		// Навигация по хешу
		hashNavigation: {
			// Отслеживать состояние
			watchState: true,
		},
		// Отключить предзагрузку картинок
		preloadImages: false,
		// Ленивая подгрузка
		lazy: {
			// Подгружать на старте переключения слайда
			loadOnTransitionStart: true,
			// Подгрузить предыдущую и следующую картинки
			loadPrevNext: false,
		},
		// Слежка за видимыми слайдами
		watchSlidesProgress: true,
		// Добавление класса видимым слайдам
		watchSlidesVisibility: true,

});

// Страница туров header slider
new Swiper('.turs-page-swiper', {
	// НАВИГАЦИЯ (точки снизу)
	pagination: {
		el: '.swiper-pagination',
		// Буллеты
		clickable: true,
		dynamicBullets: true
	},
	loop: true,

	keyboard: {
		// вкл/выкл
		enabled: true,
		// только когда слайдер в пределах видимости
		onlyInViewport: true,
	},
	
	clickable: true,
	
	// Переключение при клике на слайд
	slideToClickedSlide: true,
	
	// Скорость
	speed: 3000,
	// Автопрокрутка
	autoplay: {
		delay: 7000,
		disableOnInteraction: false,
	},
	// Навигация по хешу
	hashNavigation: {
		// Отслеживать состояние
		watchState: true,
	},
	// Отключить предзагрузку картинок
	preloadImages: false,
	// Ленивая подгрузка
	lazy: {
		// Подгружать на старте переключения слайда
		loadOnTransitionStart: true,
		// Подгрузить предыдущую и следующую картинки
		loadPrevNext: false,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,
	
});

// Burger
$(document).ready(function(){
	$('.header-burger').click(function(event){
		$('.header-burger,.header-menu').toggleClass('burger-active');
		$('.header-menu__mobil-img').toggleClass('mobil-img-none');
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
	let active_class = "header-scrolled";

	if(pageYOffset > 0) header.add(active_class)
	else header.remove(active_class)
 })



// accardion

$(".accordion").click(function(event) {
	$(this).toggleClass('accordion__active');

 });



// Обратный скролл
let lastScroll = 0;
let lastScrollTop = 0;
let lastScrollBottom = 0;
const defaultOffset = 0;
const defaultOffsetTop = 0;
const defaultOffsetBottom = 0;
const	headerTop = document.querySelector('.header-burger'),
		headerBottom = document.querySelector('.hide-mobile'),
		header = document.querySelector('.header-middle');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const scrollPositionTop = () => window.pageYOffset || document.documentElement.scrollTop;
const scrollPositionBottom = () => window.pageYOffset || document.documentElement.scrollTop;


const containHide = () => header.classList.contains('header-hide');
const containHideTop = () => headerTop.classList.contains('header-hide-top');
const containHideBottom = () => headerTop.classList.contains('header-hide-bottom');


window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        //scroll down
        header.classList.add('header-hide');
    }
    else if(scrollPosition() < lastScroll && containHide()){
        //scroll up
        header.classList.remove('header-hide');
		 
    }
    lastScroll = scrollPosition();
	 
});

window.addEventListener('scroll', () => {
	if(scrollPositionTop() > lastScrollTop && !containHideTop() && scrollPositionTop() > defaultOffsetTop) {
		//scroll down
		headerTop.classList.add('header-hide-top');
	}
	else if(scrollPositionTop() < lastScrollTop && containHideTop()){
		//scroll up
		headerTop.classList.remove('header-hide-top');
		headerBottom.classList.remove('header-hide-bottom');
	}
	
	lastScrollTop = scrollPositionTop();
	
});
window.addEventListener('scroll', () => {
	if(scrollPositionBottom() > lastScrollBottom && !containHideBottom() && scrollPositionBottom() > defaultOffsetBottom) {
		//scroll down
		headerBottom.classList.add('header-hide-bottom');
	}
	else if(scrollPositionBottom() < lastScrollBottom && containHideBottom()){
		//scroll up
		// headerBottom.classList.remove('header-hide-bottom');
	}
	
	lastScrollBottom = scrollPositionBottom();
	
});

const wrapperVideo = document.getElementById('video-about');

document.querySelector('._icon-play2, .about__video img').onclick = function() {
	$('.about').addClass('about__active');
	wrapperVideo.play();
 };



// Форма на странице иупа
//  $(document).scroll(function () {
// 	checkOffset();
// });
// function checkOffset() {
// 	if ($('.left-connection__position').offset().top + $('.left-connection__position').height()
// 		>= $('#footer',).offset().top - 10)
// 		$('.left-connection__position').css('position', 'absolute');
// 	if ($(document).scrollTop() + window.innerHeight < $('#footer').offset().top)
// 		$('.left-connection__position').css('position', 'fixed'); // restore when you scroll up
// };