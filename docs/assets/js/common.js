// 百度统计
var _hmt = _hmt || [];
(function() {
	var hm = document.createElement("script");
	hm.src = "https://hm.baidu.com/hm.js?566b31777728579c3005d1e6318bdbae";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(hm, s);
})();

// 53客服
(function() {
	var _53code = document.createElement("script");
	_53code.src = "https://tb.53kf.com/code/code/10000079/1";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(_53code, s);
})();

$(function() {
	//点击按钮时判断 百度商桥代码中的“我要咨询”按钮的元素是否存在，存在的话就执行一次点击事件
	$(".shangqiao").click(function(event) {
		var api = $53.createApi();
		api.push('cmd', 'kfclient');
		api.push('type', 'popup');
		api.query();
	});
});

$(function(){
	var el = document.createElement("script");
	el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?62a56442d474a6610d93385f96866c10c9c7fcb5b0f7cc19838651853541c70e19d1c501ebd3301f5e2290626f5b53d078c8250527fa0dfd9783a026ff3cf719";
	el.id = "ttzz";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(el, s);
});


// // 禁止右键菜单
// document.oncontextmenu = function() {
// 	return false;
// };
// // 禁止文字选择
// document.onselectstart = function() {
// 	return false;
// };
// // 禁止复制
// document.oncopy = function() {
// 	return false;
// };
// // 禁止剪切
// document.oncut = function() {
// 	return false;
// };
// // 禁止粘贴
// document.onpaste = function() {
// 	return false;
// };
//
// document.onkeydown = function(){
//
//   if(window.event && window.event.keyCode == 123) {
//     window.location="about:blank"; //将当前窗口跳转置空白页
//     event.keyCode=0;
//     event.returnValue=false;
//   }
//   if(window.event && window.event.keyCode == 13) {
//     window.event.keyCode = 505;
//   }
//   if(window.event && window.event.keyCode == 8) {
//     alert(str+"\n请使用Del键进行字符的删除操作！");
//     window.event.returnValue=false;
//   }
//
// }
