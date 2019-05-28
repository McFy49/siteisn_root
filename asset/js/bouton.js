
$(document).ready(function() { // fait en sorte que la fonction soit active dès l'ouverture du document

    /* Bouton pour changer la carte active */
    var productItem = $('.product'), // initialise une variable contenants les divs qui ont la classe 'product', c'est à dire les divs des 3 cartes descriptives
    productCurrentItem = productItem.filter('.active'); // initialise une variable contenant la div qui a la classe active dans les divs qui ont la classe 'product'

    $('#next').on('click', function(){ // déclanche le code qui suit lorsque le bouton avec l'id 'next' est appuyé
	
		var nextItem = productCurrentItem.next(); // initialise une variable qui contient la div qui suit celle active
		
		productCurrentItem.removeClass('active'); // Enleve la class 'active' pour la div de la carte actuelle

		if (nextItem.length){ // Verifie que la carte actel à une longueur nul, si oui :
			productCurrentItem = nextItem.addClass('active'); // ajoute la classe 'active' a la carte suivante
		}
		else{ // sinon:
			productCurrentItem = productItem.first().addClass('active'); // la première carte obtient la class 'active'
		}
	});

    /* Bouton pour lancer le quiz */
    $('#quiz').on('click', function() { // déclanche le code qui suit lorsque le bouton avec l'id 'quiz' est appuyé
		if (confirm("Faire le quiz ?")) { // ouvre une boite de dialogue pour confirmer
			window.location.href = "quiz_index.html"; // si la réponse est positive, alors la page du quiz est ouverte
		}
	});

    /* bouton pour revenir aux cartes d'informations */
    $('#retour').on('click', function(){  // déclanche le code qui suit lorsque le bouton avec l'id 'retour' est appuyé
		if (confirm("Retourner à la page de présentation ?")){ // ouvre une boite de dialogue pour confirmer
			window.location.href = "index.html"; // si la réponse est positive, alors la page d'information sur les spécialités est ouverte
		}
	});
    
});

