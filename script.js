const github = document.getElementById('github');
const jk = document.getElementById('p1')
const landing = document.getElementById('p2');
const converter = document.getElementById('p3')
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

github.addEventListener('click', () => {
    location.href = 'https://github.com/Miso60062?tab=repositories'
})

converter.addEventListener('click', () => {
    location.href = 'projects/String to binary/index.html'
})

landing.addEventListener('click', () => {
    location.href = 'projects/landing page/index.html'
})

jk.addEventListener('click', () => {
    location.href = 'projects/Jokes API/index.html'
})

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
    closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}