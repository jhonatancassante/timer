function main() {
    console.log('Hello world!');
    const timer = document.querySelector('.timer');
    let seconds = 0;
    let timerStart;

    document.addEventListener('click', (event) => {
        const element = event.target;

        if (element.classList.contains('start')) {
            timerStart = setInterval(() => {
                seconds++;
                timer.innerHTML = createTimerBySeconds(seconds);
            }, 1000);
            timer.classList.remove('timer-paused');
            changeButton();
        }

        if (element.classList.contains('pause')) {
            if (timerStart !== undefined) {
                clearInterval(timerStart);
                timer.classList.add('timer-paused');
            }
            changeButton();
        }

        if (element.classList.contains('reset')) {
            clearInterval(timerStart);
            seconds = 0;
            timerStart = undefined;
            timer.innerHTML = createTimerBySeconds(seconds);
            timer.classList.remove('timer-paused');
            changeButton();
        }
    });

    function createTimerBySeconds(seconds) {
        const timerNow = new Date(seconds * 1000);
        return timerNow.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    function changeButton() {
        const startButton = document.querySelector('.start');
        const pauseButton = document.querySelector('.pause');

        if (timerStart === undefined) {
            startButton.classList.add('active');
            pauseButton.classList.remove('active');
            return;
        }

        startButton.classList.toggle('active');
        pauseButton.classList.toggle('active');
    }
}

main();