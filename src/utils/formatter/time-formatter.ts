
const formatTime = (numberOfSeconds: number) => {
    const timeLeft = {
        minutes: Math.floor((numberOfSeconds / 60) % 60),
        seconds: Math.floor(numberOfSeconds % 60)
    };

    return `${("0" + timeLeft.minutes).slice(-2)}:${("0" + timeLeft.seconds).slice(-2)}`;
}

export { formatTime };