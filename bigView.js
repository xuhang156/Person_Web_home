var ishidden = false;
var widthnum = 0;
window.onresize = function() {
	changeWindowSize();
}

function changeWindowSize()
{
	// 获取窗体的宽度
	var width = document.documentElement.clientWidth;
	var height = document.documentElement.clientHeight;
	console.log('获取到窗体宽度为:'+ width );
	if (width > 1200)
	{
		mybody = document.getElementsByTagName('body');
		if (mybody == null) {
			console.log('没有找到body');
		}
		mybody.width = '1200px;'
	}
	else
	{
		
	}
}

function btnHiddenRightDiv (argument) {
	var rigtdiv =  document.getElementsByClassName('rightImg');
	var rightbtn = document.getElementsByClassName('right_btn_img');
	var righttext = document.getElementsByClassName('right_text');
	if (rigtdiv == null || righttext == null ||rightbtn == null) {
		console.log('未获取到按钮');
		return;
	}
	var widthnum = rigtdiv[0].offsetWidth;	 //首先拿到宽度
	console.log(widthnum);
	if (ishidden) {
		widthnum +=30;	
		if (widthnum >= 1500) {
			righttext[0].style.display = "block"; 
			rigtdiv[0].style.width = '1500px';
			ishidden = false;
			return;
		}
		rigtdiv[0].style.width = widthnum +'px';
	}
	else {
		widthnum -=30;
		console.log(widthnum);
		console.log('窗体正在减小');
		if (widthnum <= 150) {
			
			rigtdiv[0].style.width = '150px';
			ishidden = true;
			return;
		}
		rigtdiv[0].style.width = widthnum +'px';
		righttext[0].style.display = "none"; 
	}
	setTimeout('btnHiddenRightDiv()',1);
}