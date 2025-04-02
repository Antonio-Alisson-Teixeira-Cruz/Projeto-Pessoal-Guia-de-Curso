const changeThemeBtn = document.getElementById('changeThemeIcon')
changeThemeBtn.addEventListener('click', changeTheme)

const body = document.getElementById('body')
const topMenu = document.getElementById('header')

function changeTheme() {
    body.classList.toggle('darkTheme')
    topMenu.classList.toggle('topDarkTheme')
}
