const citations1Debut = ["La vie", "Le monde", "Le bonheur"];
const citations1Milieu = [" est un mystère qu'il faut vivre", " est un ami qui ne trahit jamais", " c'est comme une bicyclette"];
const citations1Fin = [" car nous ne penserons jamais de la même façon."," il faut avancer pour ne pas perdre l'équilibre.", " pour les connaître, il faut les aimer."];

const citations2Debut = ["Héééééé, ", "Ohhhhhh, ", "Toi, ", "Ahahah, ", "Sblaaah, "];
const citations2Milieu = ["l'Ornithorynque ", "petit hibiscus ", "flibustier ", "freluquet ", "camenbert jaune "];
const citations2Fin = ["tousse un coup !", "croiviez ce que vous vouliez...", ", y'a anguille sous roche.", ", t'es plat comme une limande !", ", il neige sous le scalp..."];

const nbCitation = ["Première", "Deuxième", "Troisième", "Quatrième", "Cinquième"];

function generationNormal () {   
let generation1 = citations1Debut[Math.floor(Math.random() * citations1Debut.length)];
let generation2 = citations1Milieu[Math.floor(Math.random() * citations1Milieu.length)];
let generation3 = citations1Fin[Math.floor(Math.random() * citations1Fin.length)];
const generationfinal = generation1 + generation2 + generation3;
return generationfinal };

function generationlol () {   
    let generation1lol = citations2Debut[Math.floor(Math.random() * citations1Debut.length)];
    let generation2lol = citations2Milieu[Math.floor(Math.random() * citations1Milieu.length)];
    let generation3lol = citations2Fin[Math.floor(Math.random() * citations1Fin.length)];
    const generationfinal = generation1lol + generation2lol + generation3lol;
    return generationfinal };

function programmeCitation(){
    let nbCitationUser = Number(prompt("Saisissez le nombre de citations entre un et cinq : "));

        while((nbCitationUser < 1) || (nbCitationUser > 5)){
            nbCitationUser = Number(prompt("Saisissez le nombre de citations entre un et cinq : "));
        }

    let choixCitationUser = (prompt("Souhaitez vous choisir les citations classique ou les citations lol ? "));

        while((choixCitationUser !== "classique") || (choixCitationUser !== "lol")){

            if((choixCitationUser === "classique") || (choixCitationUser === "lol")){
                break;
            }
            else{
                choixCitationUser = prompt("Souhaitez vous choisir les citations classique ou les citations lol ? ");
            }

        }

    for(i = 0; i < nbCitationUser; i++){
        if(choixCitationUser === "classique"){
            console.log("La " + nbCitation[i] + " citation est : " + generationNormal());
         }	
         else if(choixCitationUser === "lol"){
            console.log("La " + nbCitation[i] + " citation est : " + generationlol());
        }
    } 
}

let loop = 0;

while(loop === 0){

	var newCitation = prompt("Souhaitez-vous générer une citations ? ");

	while((newCitation !== "oui") || (newCitation !== "non")){

		if((newCitation === "oui") || (newCitation === "non")){
			break;
		}
		else{
			var newCitation = prompt("Souhaitez-vous générer une citations ? "); 
		}

	}

	if(newCitation === "oui"){
		programmeCitation();
	}
	else if (newCitation === "non") {
		console.log("C'est la fin du programme !");
		break;
	}

}
