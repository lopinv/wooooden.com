var vm = new Vue({
	el: '#content',
	data: {
		faIdx: 1, // 方案
		case_item_idx:'5_0'
	},
	created() {
		// if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i
		// 	.test(navigator.userAgent)) {
		// 	window.location.href = "/wap/index";
		// }
	},
	mounted () {
		// 页面一加载完成就执行getList方法
		// this.getProductList(); //方案
		// this.getCaseList(); //案例
	},
	methods: {
		// 方案
		clickFa: function(i) {
			this.faIdx = i;
			// $(".scheme_right img.lazyload").lazyload();
		},
		// 案例场景
		clickCase: function(index) {
			this.case_item_idx = index;
			// $(".case-box img.lazyload").lazyload();
		}
	}
});

// 轮播
var swiper = new Swiper('.carousel', {
	autoplay: true,
	pagination: {
		el: '.swiper-pagination',
		// clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	on: {
		slideChangeTransitionStart: function(){
			// $("img.lazyload").lazyload();
		},
		slideChangeTransitionEnd: function(){
			$("img.lazyload").lazyload();
		},
	},
});
// swiper.el.onmouseover = function() { //鼠标放上暂停轮播
// 	swiper.autoplay.stop();
// }
// swiper.el.onmouseleave = function() {
// 	swiper.autoplay.start();
// }
swiper.el.onmouseover = function() {
    swiper.navigation.$nextEl.removeClass('swiper-hide');
    swiper.navigation.$prevEl.removeClass('swiper-hide');
}
swiper.el.onmouseout = function() {
    swiper.navigation.$nextEl.addClass('swiper-hide');
    swiper.navigation.$prevEl.addClass('swiper-hide');
}


//服务体系
var galleryThumbs = new Swiper('.gallery-thumbs', {
	slidesPerView: 5,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,

});
var galleryTop = new Swiper('.gallery-top', {
	autoplay: false,
	loopedSlides: 5,
	thumbs: {
		swiper: galleryThumbs,
	},
	on: {
		slideChangeTransitionStart: function(){
			// $("img.lazyload").lazyload();
		},
		slideChangeTransitionEnd: function(){
			$(".ecology-box img.lazyload").lazyload();
		},
	},
});

var caseTab = new Swiper('.case-tab', {
	slidesPerView: 5,
});
var caseContent = new Swiper('.case-content', {
	autoplay: false,
	thumbs: {
		swiper: caseTab,
	}
});
