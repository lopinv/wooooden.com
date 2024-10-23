var vm = new Vue({
	el: '#content',
	data: {
		site_tab_idx:0,
		site_content_sel:[],
		site_content_list:[
			{
				city: "李桥店展厅",
				area: "12000",
				address: "北京市顺义区Y603（沿沙路）楚天子谋大厦",
				url: "https://bj.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/bj1.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj2.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj3.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj4.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj5.jpg',
				]
			},
			{
				city: "青浦展厅",
				area: "12000",
				address: "上海市青浦区嘉松中路3568号",
				url: "https://sh.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/sh-qp-1.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-qp-2.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-qp-3.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-qp-4.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-qp-5.jpg',
				]
			},
			{
				city: "浦东展厅",
				area: "5000",
				address: "上海市浦东新区秀沿路128号11号楼3F第二树",
				url: "https://pd.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/shpd05.jpg',
				]
			},
			{
				city: "闵行展厅",
				area: "5000",
				address: "上海市松江区申光路168号6栋115号",
				url: "https://mh.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/sh-mh-1.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-mh-2.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-mh-3.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-mh-4.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-mh-5.jpg',
				]
			},
			{
				city: "广州展厅",
				area: "11000",
				address: "广州市番禺区丽景路78号",
				url: "https://gz.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/gz1.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/gz02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/gz03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/gz04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/gz05.jpg',
				]
			},
			{
				city: "深圳展厅",
				area: "8000",
				address: "深圳市南山区麻磡社区奇星路47号",
				url: "https://sz.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/sz05.jpg',
				]
			},
			{
				city: "天津展厅",
				area: "7500",
				address: "天津市北辰区青光镇铁锅店村104国道旁",
				url: "https://tj.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/tj05.jpg',
				]
			},
			{
				city: "武汉展厅",
				area: "5000",
				address: "武汉市洪山区白沙洲大道2号（华中城物流建材大市场）4栋3楼",
				url: "https://wh.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/wh05.jpg',
				]
			},
			{
				city: "杭州展厅",
				area: "6000",
				address: "杭州市萧山区义蓬街道南沙路17号",
				url: "https://hz.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/hz05.jpg',
				]
			},
			{
				city: "成都展厅",
				area: "8000",
				address: "成都市双流区西航港大道中三段2667号第二树",
				url: "https://cd.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cd05.jpg',
				]
			},
			{
				city: "重庆展厅",
				area: "6000",
				address: "重庆市江北区江北城组团A07地块(江北嘴金融城旁)俊豪ICFC，A座305",
				url: "https://cq.jdwy.cn/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/cq05.jpg',
				]
			},
			{
				city: "香港展厅",
				area: "800",
				address: "香港特别行政区观塘区九龙湾启祥道9号信和工商中心7F",
				url: "https://hk.deartree.com/",
				imgs:[
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg01.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg02.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg03.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg04.jpg',
					'https://jdwy-goods.oss-cn-shanghai.aliyuncs.com/jdwy/web/images/about/site/xg05.jpg',
				]
			},
			{
				city: "双桥店展厅",
				area: "1200",
				address: "北京市朝阳区豆各庄乡Find未来园区二楼",
				url: "https://bj.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/bj-sq-1.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj-sq-2.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj-sq-3.jpg',
					'https://static.deartree.com/jdwy/images/pc/bj-sq-4.jpg',
				]
			},
			{
				city: "金桥店展厅",
				area: "750",
				address: "上海市浦东新区金苏路200号金桥万创中心F栋",
				url: "https://sh.jdwy.cn/",
				imgs:[
					'https://static.deartree.com/jdwy/images/pc/sh-jq-1.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-jq-2.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-jq-3.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-jq-4.jpg',
					'https://static.deartree.com/jdwy/images/pc/sh-jq-5.jpg',
				]
			},
		],
	},
	created() {
		if (/Android|webOS| iPhone | iPad | iPod |BlackBerry|opera mini|opera mobile|appleWebkit.*mobile|mobile/i
			.test(navigator.userAgent)) {
			window.location.href = "/wap/about";
		}
		// this.site_content_sel = this.site_content_list[0];
	},
	methods: {
		clickSiteTab: function(idx) {
			this.site_tab_idx = idx;
			// this.site_content_sel = this.site_content_list[idx];
			showSite();
		},

	}
});
showSite();
//展厅
function showSite() {
	var swiperSite = new Swiper('.swiper-site', {
		initialSlide:0,
		observer:true,//修改swiper自己或子元素时，自动初始化swiper
		autoplay: false,
		speed:2000,
		loop: true,
		// slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-next-site',
			prevEl: '.swiper-prev-site',
		},
	});
}



//展厅
// var gallerySite = new Swiper('.gallery-site', {
// 	slidesPerView: 11,
// 	freeMode: true,
// 	watchSlidesVisibility: true,
// 	watchSlidesProgress: true,
// });
// var galleryTop = new Swiper('.gallery-top', {
// 	autoplay: false,
// 	loop: true,
// 	thumbs: {
// 		swiper: gallerySite,
// 	},
// });
//企业文化
var solidQywh = new Swiper('.solid-qywh', {
	slidesPerView: 6,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});
var swiperQywh = new Swiper('.swiper-qywh', {
	autoplay: false,
	speed:2000,
	loop: true,
	loopedSlides: 6,
	thumbs: {
		swiper: solidQywh,
	},
});
//荣誉
certifySwiper = new Swiper('#certify .swiper-container', {
	watchSlidesProgress: true,
	slidesPerView: 'auto',
	centeredSlides: true,
	loop: true,
	loopedSlides: 5,
	autoplay: false,
	navigation: {
		nextEl: '.swiper-next-certify',
		prevEl: '.swiper-prev-certify',
	},
	pagination: {
		el: '.swiper-pagination-certify',
		clickable :true,
	},
	on: {
		progress: function(progress) {
			for (i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i);
				var slideProgress = this.slides[i].progress;
				modify = 1;
				if (Math.abs(slideProgress) > 1) {
					modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
				}
				translate = slideProgress * modify * 260 + 'px';
				scale = 1 - Math.abs(slideProgress) / 5;
				zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
				slide.transform('translateX(' + translate + ') scale(' + scale + ')');
				slide.css('zIndex', zIndex);
				slide.css('opacity', 1);
				if (Math.abs(slideProgress) > 3) {
					slide.css('opacity', 0);
				}
			}
		},
		setTransition: function(swiper, transition) {
			for (var i = 0; i < this.slides.length; i++) {
				var slide = this.slides.eq(i)
				slide.transition(transition);
			}

		}
	}
})
//里程碑
var proTab = new Swiper('.milestone-tab', {
	speed:1000,
	// spaceBetween: 6,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
});
var swiper = new Swiper(".milestone-content", {
	speed:1000,
	// spaceBetween: 6,
	thumbs: {
		swiper: proTab,
	},
	navigation: {
		nextEl: '.swiper-next-course',
		prevEl: '.swiper-prev-course',
	},
});
//爱心公益
var swiperWelfare = new Swiper('.swiper-welfare', {
    autoplay: false,
    // loop: true,
	slidesPerView: 4,
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination-welfare",
		type: "progressbar",
	},
	navigation: {
		nextEl: '.swiper-next-welfare',
		prevEl: '.swiper-prev-welfare',
	},
});
// swiperWelfare.el.onmouseover = function() { //鼠标放上暂停轮播
// 	swiperWelfare.autoplay.stop();
// }
// swiperWelfare.el.onmouseleave = function() {
// 	swiperWelfare.autoplay.start();
// }
