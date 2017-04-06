// 去地址栏
window.addEventListener("load",function(){
   setTimeout(function(){
    window.scrollTo(0,1);
   },0);
});

//判断是否pc端
function IsPC()
{  
	var userAgentInfo = navigator.userAgent;  
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPod",'iPad');  
	var flag = true;  
	for (var v = 0; v < Agents.length; v++) {  
		if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
	}  
	return flag;  
}
var jumpPc = IsPC();
if(jumpPc!=false){
    document.write('<style>body{width:375px;height:667px;}</style>');
}else{
	//字体自适应
	!function(a){function b(){var b=g.getBoundingClientRect().width;a.rem=(b/7.5>100?100:(b/7.5)),g.style.fontSize=a.rem+"px"}var g=a.document.documentElement,e;a.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(b,300)},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(e),e=setTimeout(b,300))},!1),b()}(window);
}