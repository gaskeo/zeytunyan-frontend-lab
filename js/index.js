function runWishAnimation() {
    const finalMessage = 'Желаете!'
    const element = document.getElementById('wish')
    if (!element) {
        console.warn("element with id=wish not found")
        return
    }

    setInterval(() => {
        if (element.innerText === finalMessage) {
            element.innerText = ''
            return
        }
        element.innerText = element.innerText + finalMessage[element.innerText.length]
    }, 200)
}

function runCountAnimation() {
    const element = document.getElementById('count')
    if (!element) {
        console.warn("element with id=count not found")
        return
    }

    let value = Number(element.innerText)
    setInterval(() => {
        value += randomIntFromInterval(1, 50)
        element.innerText = value.toLocaleString()
    }, 300)
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

runWishAnimation()
runCountAnimation()