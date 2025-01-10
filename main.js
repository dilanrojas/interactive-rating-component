const submitBtn = document.querySelector('.submit-btn')
const ratingContent = document.querySelector('.rating-wrapper')
const thanksContent = document.querySelector('.thanks-wrapper')
const rates = document.querySelectorAll('.rate')
const rating = document.querySelector('.rating-selected')

rates.forEach(rate => {
  rate.addEventListener('click', () => {
    rates.forEach(rate => rate.classList.remove('selected'))
    rate.classList.add('selected')
    rating.innerText = rate.dataset.rate
  })
})

submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  ratingContent.classList.add('fading-out')
  ratingContent.addEventListener('animationend', () => {
    ratingContent.classList.add('hidden')
    ratingContent.classList.remove('fading-out')
    thanksContent.classList.remove('hidden')
    thanksContent.classList.add('fading-in')
  })
})