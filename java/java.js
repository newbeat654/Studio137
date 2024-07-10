
$(window).on("load",function(){
	$(".loader_container").fadeOut(1000);
});

var variable=0;
window.addEventListener('load', function(){
	const config ={
		type: 'carousel',
		perView: 3,
  	animationDuration: 600,
		gap:0,
		breakpoints:{
			1920:{
				perView:2,
			},
			1000:{
				perView:1,
			}
		}
	};
	new Glide('.glide', config).mount()
})

if(variable==1)
console.log("peque");

function insta(){
	// window.location.href = "http://www.fb.com/thestudio137";
	var form = document.createElement("form");
	form.method = "GET";
	form.action = "https://www.instagram.com/studio137bolivia/";
	form.target = "_blank";
	document.body.appendChild(form);
	form.submit();
}

function face(){
	// window.location.href = "http://www.fb.com/thestudio137";
	var form = document.createElement("form");
	form.method = "GET";
	form.action = "http://www.fb.com/thestudio137";
	form.target = "_blank";
	document.body.appendChild(form);
	form.submit();
}

function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var modalbb = document.getElementById('modalbb');
	modalbb.classList.toggle('active');
}

function toggle2(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var modalbb = document.getElementById('modalbb2');
	modalbb.classList.toggle('active');

	setTimeout(() => {
		num1.style.animation="line-anim 2s ease forwards";
		inf3.style.animation="line-anim 2s ease forwards 0.2s";
		sup3.style.animation="line-anim 2s ease forwards 0.3s";
		num7.style.animation="line-anim 2s ease forwards 0.6s";

		linea.style.animation="width-anim 2s forwards";

		s.style.animation="fadein 2s forwards 2s";
		t.style.animation="fadein 2s forwards 2s";
		u.style.animation="fadein 2s forwards 2s";
		d.style.animation="fadein 2s forwards 2s";
		i.style.animation="fadein 2s forwards 2s";
		i2.style.animation="fadein 2s forwards 2s";
		o.style.animation="fadein 2s forwards 2s";

		NUM1.style.animation="fadein 2s forwards 2s";
		INF3.style.animation="fadein 2s forwards 2s";
		SUP3.style.animation="fadein 2s forwards 2s";
		NUM7.style.animation="fadein 2s forwards 2s";
	}, 500);
}

function toggle3(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var modalbb = document.getElementById('modalbb2');
	modalbb.classList.toggle('active');

	setTimeout(() => {
		num1.style.animation="clear";
		inf3.style.animation="clear3i";
		sup3.style.animation="clear3s";
		num7.style.animation="clear";

		linea.style.animation="NOwidth-anim";

		s.style.animation="fadeout";
		t.style.animation="fadeout";
		u.style.animation="fadeout";
		d.style.animation="fadeout";
		i.style.animation="fadeout";
		i2.style.animation="fadeout";
		o.style.animation="fadeout";

		NUM1.style.animation="fadeout";
		INF3.style.animation="fadeout";
		SUP3.style.animation="fadeout";
		NUM7.style.animation="fadeout";
	}, 500);
}
