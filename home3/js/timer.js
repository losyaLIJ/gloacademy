const daysBlock = document.querySelector('.timer__days')
const hoursBlock = document.querySelector('.timer__hours')
const minutesBlock = document.querySelector('.timer__minutes')
const secondsBlock = document.querySelector('.timer__seconds')

let interval

const words = {
    days: ['день', 'дня', 'дней'],
    hours: ['час', 'часа', 'часов'],
    minutes: ['минута', 'минуты', 'минут'],
    seconds: ['секунда', 'секунды', 'секунд']
};

const numWord = (value, words) => {
    if (value <= 0) return words[2]
    value = Math.abs(value) % 100
    const lastNum = value % 10

    if (value > 10 && value < 20) return words[2]
    if (lastNum === 1) return words[0]
    if (lastNum >= 2 && lastNum <= 4) return words[1]

    return words[2]
}

const updateTimer = () => {
    const date = new Date();
    const dateDeadline = new Date('13 november 2025').getTime();
    const timeRemaining = (dateDeadline - date) / 1000;

    const days = Math.floor(timeRemaining / 24 / 3600);
    const hours = Math.floor((timeRemaining / 3600) % 24);
    const minutes = Math.floor((timeRemaining / 60) % 60);
    const seconds = Math.floor(timeRemaining % 60);

    const fDays = days < 10 ? '0' + days : days
    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSeconds = seconds < 10 ? '0' + seconds : seconds

    daysBlock.textContent = fDays
    hoursBlock.textContent = fHours
    minutesBlock.textContent = fMinutes
    secondsBlock.textContent = fSeconds

    secondsBlock.nextElementSibling.textContent = numWord(seconds, words.seconds)
    minutesBlock.nextElementSibling.textContent = numWord(minutes, words.minutes)
    hoursBlock.nextElementSibling.textContent = numWord(hours, words.hours)
    daysBlock.nextElementSibling.textContent = numWord(days, words.days)

    if (timeRemaining <= 0) {
        clearInterval(interval)
        daysBlock.style.color = hoursBlock.style.color = minutesBlock.style.color = secondsBlock.style.color = 'red'
        daysBlock.textContent = '00'
        hoursBlock.textContent = '00'
        minutesBlock.textContent = '00'
        secondsBlock.textContent = '00'
    }
}

updateTimer();
interval = setInterval(updateTimer, 500);