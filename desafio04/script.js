const elements = document.querySelectorAll(".card p")
const limit = 15

for (let p of elements) {
    const aboveLimit = p.innerText.length > limit
    const dotsOrEmpty = aboveLimit? '...': ''
    p.innerText = p.innerText.substring(0,67)+dotsOrEmpty
}