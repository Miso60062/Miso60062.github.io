const btn = document.getElementById("btn")
const text = document.getElementById("joke")

function jokes() {
    fetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then(res => res.json())
    .then(data => text.innerText = JSON.stringify(data.value));
}

btn.addEventListener('click', () => {
    jokes()
})

jokes()

