let clock = document.querySelectorAll('.hr');
s=0;
m=6;
h=0;

setInterval(function(){
	clock[1].style.transform =  "rotate(" + h + "deg)";
	h=h+6;
},3600000);

setInterval(function(){
	clock[0].style.transform =  "rotate(" + m + "deg)";
	m=m+6;
},60000);

setInterval(function(){
	clock[2].style.transform =  "rotate(" + s + "deg)";var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var second = d.getSeconds();

let clock = document.querySelectorAll('.hr');
s=second*6;
m=minute*6;
h=hour*30;
clock[1].style.transform = "rotate(" + h + "deg)";
h = h + 6;
clock[0].style.transform = "rotate(" + m + "deg)";
m = m + 6;
clock[2].style.transform = "rotate(" + s + "deg)";
s = s + 6;

setInterval(function(){
	clock[1].style.transform =  "rotate(" + h + "deg)";
	h=h+6;
},3600000);

setInterval(function(){
	clock[0].style.transform =  "rotate(" + m + "deg)";
	m=m+6;
},60000);

setInterval(function(){
	clock[2].style.transform =  "rotate(" + s + "deg)";
	s=s+6;
},1000);

	s=s+6;
},1000);
