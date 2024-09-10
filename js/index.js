const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'logueo.html'
}

const logout = document.querySelector('#logout')

logout.addEventListener('click', () =>{

    alert('sesion finalizada')
    localStorage.removeItem('login_success')
    window.location.href = 'logueo.html'


})