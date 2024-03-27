const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
const nombreDeSlide = slides.length;
let position = 0;

creerCarrousel (position)
creerBulletsPoints ();
modifierBulletsPoints()


// Ajout de deux variables constantes pour les flèches gauches et droite
// Ajout des Event Listeners pour les flèches gauches et droites

const arrowLeft = document.querySelector('.arrow_left');
//console.log(arrowLeft);
const arrowRight = document.querySelector('.arrow_right');
//console.log(arrowRight);

arrowLeft.addEventListener("click", () => {
	console.log('Gauche');
	position = position - 1;
	if (position > slides.length -1)
	position = 0;
	if (position < 0)
	position = slides.length - 1;
	creerCarrousel(position)
})

arrowRight.addEventListener("click", () =>{
	//console.log('Droite')
	position = position + 1;
	if (position > slides.length -1)
	position = 0;
	if (position < 0)
	position = slides.length - 1;
	creerCarrousel(position)
})

// Création des bullets points 

function creerBulletsPoints (){
	const dots = document.querySelector('.dots');
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement("div");
		dot.setAttribute ("class", "dot");
		dots.appendChild(dot);
	}
}

//Modification du bullet point sélectionné 

function modifierBulletsPoints(){
	const listePoints = document.querySelectorAll('.dot');
	for (let i = 0; i < listePoints.length; i++){
	const dot =listePoints[i];
	if (i === position){
		dot.classList.add('dot_selected');
	}else{
		dot.classList.remove('dot_selected');
	}
}
}


function creerCarrousel (position){
	const element = slides[position];
	//console.log(element);

	const img = document.querySelector('.banner-img');
	//console.log(img);
	img.setAttribute('src', './assets/images/slideshow/'+ element.image);

	const texte = document.querySelector('.banner-texte');
	//console.log(texte);
	texte.innerHTML = element.tagLine;
	modifierBulletsPoints();

}


