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
	clock[2].style.transform =  "rotate(" + s + "deg)";
	s=s+6;
},1000);
