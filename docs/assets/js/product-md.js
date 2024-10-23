var vm = new Vue({
	el: '#content',
	data: {
		brandShowIdx:0,
	},
	created() {
		if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i
			.test(navigator.userAgent)) {
			window.location.href = "/wap/product";
		}
		setInterval(this.scroll, 4000);
	},
	methods: {
		isBrandShow: function(idx) {
			this.brandShowIdx = idx;
		},
	}
})

// 轮播
// var swiper = new Swiper('.carousel', {
// 	autoplay: true,
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true,
// 	}
// });
// swiper.el.onmouseover = function() { //鼠标放上暂停轮播
// 	swiper.autoplay.stop();
// }
// swiper.el.onmouseleave = function() {
// 	swiper.autoplay.start();
// }

