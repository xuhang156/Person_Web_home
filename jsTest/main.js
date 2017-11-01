/*
 	test1： 测试鼠标点击时图片是否进行切换
 */
//changerImg();



/*
	test2：测试鼠标移动时图片是否进行切换
 */
moveImg();


/*
	test3：测试使用localstorage，读取文件中的变量值

welcomeMsg();
testObj(2);
 */


/*
	通过参数来创建对象，参数的个数不确定
 */
var objMake = newObj(Person,"xuhang","man");
var jsonmsg = JSON.stringify(objMake);
console.log(jsonmsg);




function helloWorld(test1,test2)
{
	var test3 = test1 + test2;
	console.log(test3);
	var test = document.getElementById('btn');
	test.onmouseup = function() 
	{
		test.style.background='#FFFFFF';
	}
	test.onmouseout = function() {
		test.style.background='#3AFB32';
	}
	test.onclick = function() {
		test.style.background='#EE2525';
	}

	test.onmouseover = function() {
		test.style.background = '#FDF972';
	}
	//document.querySelector('html').onclick = function()
	{
		alert('ouch ! stop pick me');
	}
}
/*
	此函数是对图片点击时进行切换
 */
function changerImg() {
	var imgs = document.querySelector('img');
	console.log(imgs);
	if (imgs == null) {
		console.log(imgs);
		console.log('it is nothing');
	}
    else{
		imgs.onclick = function() {
			var src = imgs.getAttribute('src');
			if (src === '../img/img.jpg' )
			 {
			 	imgs.setAttribute('src', '../img/img1.jpg');
			 	console.log(src);
			 }
			else
			 {
			 	imgs.setAttribute('src', '../img/img.jpg');
			 	console.log(src);
			 }
    }
	}
}

function moveImg()
{
	var imgs = document.querySelector('img');
	console.log(imgs);
	if (imgs == null) {
		console.log(imgs);
		console.log('it is nothing');
	}
    else{
		imgs.onmouseenter = function() {
			var src = imgs.getAttribute('src');
			if (src === '../img/img.jpg' )
			 {
			 	imgs.setAttribute('src', '../img/img1.jpg');
			 	console.log(src);
			 }
			else
			 {
			 	imgs.setAttribute('src', '../img/img.jpg');
			 	console.log(src);
			 }
    	}
    	imgs.onmouseout = function() {
    		var src = imgs.getAttribute('src');
			if (src === '../img/img.jpg' )
			 {
			 	imgs.setAttribute('src', '../img/img1.jpg');
			 	console.log(src);
			 }
			else
			 {
			 	imgs.setAttribute('src', '../img/img.jpg');
			 	console.log(src);
			 }
    	}
	} 
}

function welcomeMsg() {

	var btn = document.querySelector('button');
	var heading = document.querySelector('h1');
	if(!localStorage.getItem('name'))
	{
		var name = prompt('please enter your name');
		localStorage.setItem('name', name);
		heading.innerHTML = 'test : ' + name ;
	}
	else {
		var localName = localStorage.getItem('name');
		heading.innerHTML = 'localStorageMsg : ' + localName ;	
	}
	
}

function testObj(number) 
{
	var arrayObj = new Array();
	var times = 0;
	if (number < 0 && number >100) {
		console.log('it is to small or to big');
	}
	else {
		while (number--) {
			// statement
			var obj = new Object();
			obj.index = times;
			obj.name = 'xuhang'; 
			arrayObj[times] =  obj;
			times++;
		}
	}
	var jsonmsg = JSON.stringify(arrayObj);
	console.log(jsonmsg);
}

function Person(first,second)
{
	this.first = first;
	this.second = second;
}


function newObj(constructor,...args) 
{
	var o_ = {};
	var size = args.length;
	console.log(size);
	constructor.apply(o_, args);
	return o_;
}