const toggleButton = document.querySelector('.toggle-menu');
const header = document.querySelector('.header');
toggleButton.addEventListener('click', function () {
	header.classList.toggle('toggle');
});

$(function ($) {
	var dest = new Date(2023, 06, 1);

	var circleParams = {
		color: '#41a7d7',
		strokeWidth: 5,
		trailWidth: 2
	};

	var animParams = {
		duration: 400,
		easing: 'easeInOut'
	};

	var circleDays = new ProgressBar.Circle('.days', circleParams);
	var circleHours = new ProgressBar.Circle('.hours', circleParams);
	var circleMinutes = new ProgressBar.Circle('.minutes', circleParams);
	var circleSeconds = new ProgressBar.Circle('.seconds', circleParams);

	setInterval(setTimer, 1000);

	function setTimer() {
		var now = new Date();

		var ts = countdown(
			now,
			dest,
			countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS
		);

		var days = ts.days;
		var hours = ts.hours;
		var minutes = ts.minutes;
		var seconds = ts.seconds;

		var daysProgress = 1 / 365 * days;
		var hoursProgress = 1 / 24 * hours;
		var minutesProgress = 1 / 60 * minutes;
		var secondsProgress = 1 / 60 * seconds;

		circleDays.animate(daysProgress, animParams);
		circleDays.setText(days);

		circleHours.animate(hoursProgress, animParams);
		circleHours.setText(hours);

		circleMinutes.animate(minutesProgress, animParams);
		circleMinutes.setText(minutes);

		circleSeconds.animate(secondsProgress, animParams);
		circleSeconds.setText(seconds);
	}
});