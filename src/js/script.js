const changeThemeBtn = document.getElementById('changeThemeIcon')
changeThemeBtn.addEventListener('click', changeTheme)

const body = document.getElementById('lightTheme')
const topMenu = document.getElementById('topLightTheme')

function changeTheme() {
    body.classList.toggle('darkTheme')
    topMenu.classList.toggle('topDarkTheme')
}