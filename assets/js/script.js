var slideItem = 0;
window.onload = function () {
	setInterval(passarSlide, 7000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for (var i in objs) {
		objs[i].style.width = slidewidth + 'px';
	}
}

function passarSlide() {
	var slidewidth = document.getElementById('slideshow').offsetWidth;
	if (slideItem >=3) {
		slideItem = 0;
	} else {
		slideItem++;
	}
	// Div slideshow_area é que vai dar as margin para "passar" os slides
	document.getElementsByClassName("slideshow_area")[0].style.marginLeft = '-' + (slidewidth * slideItem) + 'px';
}

function mudarSlide(slide) {
	slideItem = slide;
	var slidewidth = document.getElementById('slideshow').offsetWidth;
	document.getElementsByClassName("slideshow_area")[0].style.marginLeft = '-' + (slidewidth * slideItem) + 'px';
}

//Funcao para Menu Mobile
function toggleMenu(){
	var menu = document.getElementById("menu");
	//Se menu display for none ou '', entao...
	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = 'block';
	} else {
		menu.style.display = 'none';
	}
}