var times = 0;
var imgarray=new Array(3);
imgarray[0]="img/background.jpg";
imgarray[1]="img/background2.jpg";
imgarray[2]="img/background3.jpg";
changeWindowSize();
window.onresize = function() {
	changeWindowSize();
}
allMouseEvent();
ImgChangeWhenWindowChange('img/background.jpg');

window.setInterval(showalert, 7000); 


//窗体改变时布局的调整
function changeWindowSize()
{
	// 获取窗体的宽度
	var linklarge=document.getElementById("Ibtn");
	var listStyle=document.getElementById("menu_ul").getElementsByTagName("li");

	//console.log('获取到的size 是'+ listStyle);

	if(linklarge == null || listStyle == null)
	{
		//console.log('未获取到按钮或者未获取到list');
		return;
	}

	var width = document.documentElement.clientWidth;
	//console.log('获取到窗体宽度为:'+ width );
	if (width < 900)
	{
			if(linklarge.length != 0)
			{
				linklarge.style.display  = "block";
				for (var i = 0; i < listStyle.length; i++) {
					listStyle[i].style.cssFloat = 'none';
				}
			}
	}
	else
	{
			//console.log('已经到达800');
			linklarge.style.display = "none";
			for (var i = 0; i < listStyle.length; i++) {
					listStyle[i].style.cssFloat = 'left';
				}
	}
}

function allMouseEvent()
 {
	var btn = document.getElementById("Ibtn");
	btn.onmouseup = function() {
		BtnClick("over");
	}
	btn.onmousedown = function() {
		BtnClick("down");
	}
	btn.onmouseover = function() {
		BtnClick("up");
	}
	btn.onmouseout = function() {
		BtnClick("out");
	}
}
//按钮事件 
function BtnClick(event) 
{
	var btn = document.getElementById("Ibtn");
	if (btn == null) { console.log('未获取到按钮');return;}
	else {
		//首先修改，修改内部的那三条线
		//var listStyle=document.getElementById("menu_ul").getElementsByTagName("li");
		var btn_line = btn.getElementsByTagName("span");
		if (btn_line == null) 
		{
			console.log('未选中按钮'); 
			return;
		}

		if (event == "down"){
			btn.style.border = '1px solid #ECFC34' ;   	//border: 1px solid white;
			for (var i = 0; i < btn_line.length; i++) {
				btn_line[i].style.background = '#ECFC34';
			}
		}
		if (event == "up") {
			// 首先鼠标变为手势
			btn.style.cursor = 'pointer';
			btn.style.background = '#948F8F';
			for (var i = 0; i < btn_line.length; i++) {
				btn_line[i].style.background = '#272626';
			}
		}
		if (event == "over") {
			btn.style.border = '2px solid white';
			for (var i = 0; i < btn_line.length; i++) {
				btn_line[i].style.background = '#171717';
			}
		}
		if (event == "out") {
			btn.style.cursor = 'none';
			btn.style.background = '#EDECEC';
			for (var i = 0; i < btn_line.length; i++) {
				btn_line[i].style.background = '#FFFFFF';
			}
		}

	}
}


function showalert() 
{ 
	console.log(times);
	if (times == 3) { times = 0;}
	ImgChangeWhenWindowChange(imgarray[times]);
	times++;
} 
function ImgChangeWhenWindowChange(imgsrc)
{
	var mydiv = document.getElementById("bigImgDiv");
	// var imgwidth;
	// var imgheight;
	// var img = new Image();
	// img.src = imgsrc;
	// img.onload = function()
	// {
	// 	imgwidth = img.width;
	// 	imgheight = img.height;
	// }
	//mydiv.style.backgroundImage = 'url(img/background.jpg)';
	
	mydiv.style.backgroundImage = "url(" + imgsrc +")";
}