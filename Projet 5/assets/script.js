

const slides = [
	{
		"image":"assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentSlides = 0

for (let i = 0; i < slides.length; i++) {
	let dots = document.querySelector (".dots")
	let div = document.createElement ("div")
	div.className = "dot " + "dot"+i
	dots.appendChild (div)
	if (i === 0) {
		div.className = "dot " + "dot"+i +" dot_selected"
	}
}



const slideBanner = document.getElementById ("banner");
console.log(slideBanner)

const prevButton = document.getElementById ("arrow_left");
console.log(prevButton)

const nextButton = document.getElementById ("arrow_right");
console.log(nextButton)

nextButton.addEventListener("click", () => {
	currentSlides++
	if (currentSlides >= slides.length){
		currentSlides = 0
	}
	console.log(currentSlides)
	let img = document.querySelector (".banner-img")
	img.src = slides[currentSlides].image
	let tag = document.querySelector (".tag")
	tag.innerHTML = slides[currentSlides].tagLine

	let dot_selected = document.querySelector (".dot_selected")
	dot_selected.className = "dot dot" + (currentSlides-1)
	if (currentSlides === 0 ) {
		dot_selected.className = "dot " + "dot" + (slides.length-1)
	}

	dot_selected = document.querySelector (".dot" + currentSlides)
	console.log(dot_selected)
	dot_selected.className = "dot " + "dot" + currentSlides + " dot_selected"

  });

prevButton.addEventListener("click", () => {
	currentSlides--
	if (currentSlides < 0){
		currentSlides = slides.length - 1
	}
	console.log(currentSlides)
	let img = document.querySelector (".banner-img")
	img.src = slides[currentSlides].image
	let tag = document.querySelector (".tag")
	tag.innerHTML = slides[currentSlides].tagLine

	let dot_selected = document.querySelector (".dot_selected")
	dot_selected.className = "dot dot" + (currentSlides+1)
	if (currentSlides === (slides.length-1)) {
		dot_selected.className = "dot " + "dot0"
	}

	dot_selected = document.querySelector (".dot" + currentSlides)
	console.log(dot_selected)
	dot_selected.className = "dot " + "dot" + currentSlides + " dot_selected"
  });

