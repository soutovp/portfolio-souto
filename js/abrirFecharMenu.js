function abrirFecharMenu() {
	if (window.innerWidth > 850) {
		aside.style.transform = 'translateX(0)'
		botaoMenu.style.display = 'none'
	} else {
		aside.style.transform = 'translateX(-80vw)'
		botaoMenu.style.display = 'block'
	}
}