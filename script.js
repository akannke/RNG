const REFLEASH_INTERVAL = 5000

const resultVal = document.getElementById('resultVal')

const getRandomNumber = (max, min) => {
  return Math.floor(Math.random()*(max - min)) + min
}

const displayResultNumer = n => {
  resultVal.innerText = n
}

const genNewRandomNumber = () => {
  const n = getRandomNumber(1, 101)
  displayResultNumer(n)
}

resultVal.addEventListener('click', genNewRandomNumber)
setInterval(genNewRandomNumber, REFLEASH_INTERVAL)
