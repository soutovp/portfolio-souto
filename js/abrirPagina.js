let paginaAtual = ''
const abrirPagina = novaPagina => {
	if (paginaAtual === '') {
		paginaAtual = 'sobreMim'
	}
	if (!document.getElementById(novaPagina)) {
		return console.error('Nova página não encontrada.')
	}
	document.getElementById(paginaAtual).style.display = 'none'
	document.getElementById(novaPagina).style.display = 'block'
	if (window.innerWidth < 850) {
		abrirFecharMenu()
	}
	paginaAtual = novaPagina
}