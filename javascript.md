

#### Layout gala - css 레이아웃 설정  // 사이트 

##### 7. 변수와 대입 연산자

```javascript
var name = 'eunji'
"my name is" + name ;
```



##### 8. css

```css
<h2 style="background-color:coral;color:powderblue">JavaScript</h2>
<div></div>  //문장 전체를 강조 자동 줄 바꿈 
<span style="font-weight:bold"></span> // 줄바꿈 없음 강조 
<span class="js"></span>
<style>
.js{
    font.weight:blod
}
</style>
<span id="first">JavaScript</span>
<style>
#first{
    color:green;
}
</style>
// 우선 순위 id - class - Tag 순으로   
```



<style >
h1 { font-size:20px; color: #f00; border:1px solid #000; margin: 10px }
h2{ font-size:14px; color:#36f; margin:5px}
p { font-size:12px; color:#333;}
.headline {color:#f00; border:1px solid #999; margin:5px}

#head{ height:50px; background-color:#3cf; padding:10px; border-color:#00f}
</style>

</head>
<body>





![image-20210623093624991](C:\Users\eunji\AppData\Roaming\Typora\typora-user-images\image-20210623093624991.png)

<h1 id="head">Mac OSX 와 Windows 7 </h1>

 =============================================================



![image-20210623112750359](C:\Users\eunji\AppData\Roaming\Typora\typora-user-images\image-20210623112750359.png)

- 마우스를 올려 두면 색이 변함

```javascript
<style type="text/css">
body {
  font-family: "맑은 고딕", "돋움";
  font-size: 12px;
  color: #333;
}

a:link    {color: #F60;text-decoration: none;}
a:hover   {color: #06F;text-decoration: underline;}
a:visited {color: #999;}
a:active  {color: #F00;text-decoration: line-through;}

h1:before {content: url(images/bul1.gif);}
h1:after  {content:  url(images/bul2.gif);}

table, table td{border:1px solid #000}
table    {border-collapse:collapse; width:500px;}
td 	 { padding:10px;}
tr:hover { background-color: #FC6; }

</style>
```



##### 9. 제어할 태그 선택하기

```javascript
<input type="button" value="night" onclick="
document.querySelector('body').style.backgroundColor = "black";
document.querySelector('body').style.color = "white";
">

<input type="button" value="day" onclick="
document.querySelector('body').style.backgroundColor = "white";
document.querySelector('body').style.color = "black";
">

// 주간 야간 모드 설정
```

##### 10.조건문

```javascript
<input id="night_day" type="button" value="black" onclick="
	if(document.querySelector('body').value === 'night'){
        document.querySelector('body').style.backgroundColor = "black";
		document.querySelector('body').style.color = "white";
    	document.querySelector('night_day').value='day'
    }else {
        document.querySelector('body').style.backgroundColor = "white";
		document.querySelector('body').style.color = "black";
    	document.querySelector('night_day').value='night'
    }
">
```

##### 11.비교 연산자와 블리언

```javascript
// Booleans
<script>
	docuent.write(1===1);    
</script>

<h3>1&lt;2</h3>
<script>
	docuent.write(1<2);    
</script>
```

##### 12.리팩토링 - this를 이용하여 유지보수가 쉬어짐

```javascript
var target = document.querySelector('body');
<input type="button" value="black" onclick="
	if(this.value === 'night'){
        target.style.backgroundColor = "black";
		target.style.color = "white";
    	this.value='day'
    }else {
        target.style.backgroundColor = "white";
		target.style.color = "black";
    	this.value='night'
    }
">
------------------------------------------------------------------------
// input#user-id.focused { …} 예

<style type="text/css">
input{ 
	background-color:#fff; 
	padding:5px; 
	border:2px solid #03cf5d;
    background-repeat:no-repeat; /*repeat-x  -> 이미지 반복 */
	outline:none;}

input#user-id {background-color: #fff}
input#user-id.focused{background-color: #fff}

h1,h2, .txt_box{ text-decoration: underline;} // 밑줄
</style>
<script>
function changeBackground(input, className) {
	input.className = className;
// 	if(focused){
// 		input.style.backgroundColor = "#fff";
// 	} else {
// 		input.style.backgroundColor = "#03cf5d";
// 	}
}
</script>

<form>
		<input 
		onfocus='changeBackground(this, "focused");'
		onblur='changeBackground(this,"");'
		type="text" 
		id="user-id" 
		name="userId"
		class="focused">
		<br/>
		<input type="password" name="password">
</form>
```



##### 10. 배열

```javascript
<script>
	var coworkers = {"egoing","leezche"}    
</script>

<script>
	document.write(coworkers[0]);
</script>

<script>
	coworkers.push("eunji");
</script>
```



##### 11.반복문

```javascript
<script>
    var i = 0;
	while(i<3){
        document.write('<li>1</li>');
        i = i+1;
    }    
</script>
```

#####  12. 단위

```javas
body {
	font-family: "돋움", "맑은 고딕";
	font-size: 0.8em;
    /* em = 구하고자 하는 엘리먼트의 pixel 값 / 부모 엘리먼트의 font-size pixel 값 */
	color: #333;	
}
```

##### 13.border

```htm
.box1 {	border: 4px dashed;}
.box2 {	border:4px dotted;}
.box3 {	border:4px double;}
.box4 {	border:4px groove;}
.box5 {	border:4px  inset;}
.box6 {	border:4px outset;}
.box7 {border: 4px ridge;}
.box8 {border: 4px solid;}
.box9 {	border: 4px none;}
```



![image-20210623145327820](C:\Users\eunji\AppData\Roaming\Typora\typora-user-images\image-20210623145327820.png)

##### 14.함수

```javas
<script>
	function nightDayHandler(){
	}
</script>
```

