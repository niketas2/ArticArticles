const paralaxImg = document.getElementById('paralax--img')
const paralaxText = document.getElementById('main--content')

document.addEventListener('mousemove', function (e) {
	const x = e.clientX / window.innerWidth
	const y = e.clientY / window.innerHeight

	paralaxImg.style.transition = 'transform 0.1s ease'
	paralaxText.style.transition = 'transform 0.1s ease'

	paralaxImg.style.transform = `translate(-${x * 40}px, -${y * 40}px)`
	paralaxText.style.transform = `translate(-${x * 20}px, -${y * 20}px)`
})
document.addEventListener('mouseleave', function () {
	paralaxImg.style.transition = 'none'
	paralaxText.style.transition = 'none'
})
