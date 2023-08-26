const btnSignup = document.getElementById('signUp')
const btnSingin = document.getElementById('signIn')
const container = document.getElementById('container')


btnSignup.addEventListener('click', () => {
    container.classList.add("right-panel-active")

})

btnSingin.addEventListener('click', () =>{
    container.classList.remove("right-panel-active")
})


//popup model

const model = document.querySelector("#model")

const openLogin = document.querySelector('.login')
// const closeLogin = document.querySelector('')

openLogin.addEventListener('click', ()=>{
    model.show();
})

