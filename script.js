let button = document.getElementById('knopka');
let counter = document.getElementById('counter');
let count = 0;
let timerElement = document.getElementById('timer');
let timeLeft =  45;

	button.addEventListener('click', function(e) {
	count++;
	counter.textContent = "РљРѕР»-РІРѕ РєР»РёРєРѕРІ:" + count;

	let randomX = Math.random() * window.innerWidth;
	let randomY = Math.random() * window.innerHeight;

	button.style.left = randomX + 'px';
	button.style.top = randomY + 'px';
	});




	const countdown = setInterval(() => {
	if (timeLeft <= 0) {
		clearInterval(countdown);
		timerElement.textContent = 0;
		
		document.getElementById('knopka').onclick = function() {
		  //console.log("knopka")
		  window.location.href = 'screen3.html';
		};

	} else {
		timerElement.textContent = timeLeft;
		timeLeft--;
	}
	}, 1000); // Timer will update every 1 second