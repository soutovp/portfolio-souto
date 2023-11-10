const aside = document.getElementById('asideMenu')
const botaoMenu = document.getElementById('botaoMenu')
abrirPagina('sobreMim')
abrirFecharMenu();
window.addEventListener('resize', abrirFecharMenu)

//MENU ITENS ---------
const menuItems = document.getElementsByClassName('menuItem')
const objMenu = {
	'Sobre mim': 'sobreMim',
	'Formação': 'formacao',
	'Experiências Profissionais': 'experienciasProfissionais',
	'Habilidades': 'habilidades',
	'Portfólio': 'portfolio',
	'Contato': 'contato'
}
for (item in menuItems) {
	menuItems[item].addEventListener('click', e => {
		console.log(`Abrindo a página: ${objMenu[e.target.innerHTML]}`)
		abrirPagina(objMenu[e.target.innerHTML])
	})
}
const sobreMim = document.getElementById('sobreMim')
//--------------------