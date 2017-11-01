window.onresize = function() {
	changeWindowSize();
}

var rightbtn = document.getElementsByClassName('right_btn_img');
rightbtn.onclick = btnHiddenRightDiv('nihao');
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
	var rigtdiv = document.getElementsByClassName('rightImg');
	var righttext = document.getElementsByClassName('right_text');
	if (rigtdiv == null) {
		console.log('未获取到按钮');
	}
	rigtdiv.style.width = '150px';

	// body... 
}