$(function() {
	
	// ----------- Timer
	function timerLeft(year,month,day) {
		setInterval(function() {
			var daysLeft = document.getElementById('day'),
					hoursLeft = document.getElementById('hour'),
					minutesLeft = document.getElementById('minute'),
					secLeft = document.getElementById('second'),
					dateNow = new Date().getTime(),
					dateFinish = new Date(year,month,day),
					sec = Math.floor((dateFinish - dateNow) / 1000),
					daysNumber = Math.floor(sec / 86400),
					secToHours = sec % 86400,
					secToMinutes = sec % 3600,
					hoursNumber = Math.floor(secToHours / 3600);
					// hoursNumber = Math.floor((sec / 3600) / 24),
					minutesNumber = Math.floor(secToMinutes / 60),
					secondsNumber = secToMinutes % 60;
						
			daysLeft.innerHTML = daysNumber;
			hoursLeft.innerHTML = hoursNumber;
			minutesLeft.innerHTML = minutesNumber;
			secLeft.innerHTML = secondsNumber;
		},1000)
	}
	timerLeft(2018, 07, 30);



	// ---------- Slider
	var slideNow = 1,
			slideCount = $('.sliderwrapper').children().length,
			slideTime = 3000,
			counter = $('#counter'),
			arrRight = $('.arrow-right'),
			arrLeft = $('.arrow-left');

	setInterval(nextSlide, slideTime);
	arrRight.click(nextSlide);
	arrLeft.click(prevSlide);


	function nextSlide() {
		if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
			$('.sliderwrapper').css({
				'transform' : 'translate(0,0)',
				'-o-transform' : 'translate(0,0)',
				'-webkit-transform' : 'translate(0,0)'
			});
			slideNow = 1;
		} else {
			var trWidth = -$('.viewport').width() * (slideNow);
			$('.sliderwrapper').css({
				'transform' : 'translate('+trWidth+'px,0)',
				'-o-transform' : 'translate('+trWidth+'px,0)',
				'-webkit-transform' : 'translate('+trWidth+'px,0)'
			});
			slideNow++;
		}
		counter.text(slideNow);
	}

	function prevSlide() {
		if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
			var trWidth = -$('.viewport').width() * (slideCount - 1);
			$('.sliderwrapper').css({
				'transform' : 'translate('+trWidth+'px,0)',
				'-o-transform' : 'translate('+trWidth+'px,0)',
				'-webkit-transform' : 'translate('+trWidth+'px,0)'
			});
			slideNow = slideCount;
		} else {
			var trWidth = -$('.viewport').width() * (slideNow - 2);
			$('.sliderwrapper').css({
				'transform' : 'translate('+trWidth+'px,0)',
				'-o-transform' : 'translate('+trWidth+'px,0)',
				'-webkit-transform' : 'translate('+trWidth+'px,0)'
			});
			slideNow--;
		}
		counter.text(slideNow);
	}
});


