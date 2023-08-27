const btnSignup = document.getElementById('signUp')
const btnSingin = document.getElementById('signIn')
const container = document.getElementById('container')


btnSignup.addEventListener('click', () => {
    container.classList.add("right-panel-active")

})

btnSingin.addEventListener('click', () =>{
    container.classList.remove("right-panel-active")
})


//popup modal
const modal = document.querySelector('.modal')
const openModal = document.querySelector('.loginOpener');
const closeModal = document.querySelector('.close-button');
openModal.addEventListener('click', ()=>{
    modal.showModal();
})


closeModal.addEventListener('click', ()=>{
    modal.close();
})

