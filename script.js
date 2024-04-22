let button = document.getElementById('knopka');
let counter = document.getElementById('counter');
let count = 0;
let timerElement = document.getElementById('timer');
let timeLeft =  10;

	button.addEventListener('click', function(e) {
	count++;
	counter.textContent = "Кол-во кликов:" + count;

	let randomX = Math.random() * window.innerWidth;
	let randomY = Math.random() * window.innerHeight;

	button.style.left = randomX + 'px';
	button.style.top = randomY + 'px';
	});




	const countdown = setInterval(() => {
	if (timeLeft <= 0) {
		clearInterval(countdown);
		timerElement.textContent = 0;
	} else {
		timerElement.textContent = timeLeft;
		timeLeft--;
	}
	}, 1000); // Timer will update every 1 second