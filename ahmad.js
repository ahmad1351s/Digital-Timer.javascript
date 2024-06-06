const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
const timer = document.getElementById('timer')

var monthName = [
    'january',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]
const clock = setInterval(function time() {
    let today = new Date()
    let d = today.getDate()
    let m = today.getMonth()
    let y = today.getFullYear()
    let h = today.getHours()
    let min = today.getMinutes()
    let sec = today.getSeconds()

    

    day.innerHTML = '5 Juni 2024'
    hour.textContent = h
    minute.innerText = m
    second.innerText = sec
      
    
})

