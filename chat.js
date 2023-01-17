//Effet hover input
const input = document.querySelector('#input')
        let isFocus= ""
        input.onfocus = (e) => {
            document.querySelector("#input-container").style.cssText ='background: #434250 !important; box-shadow: 0px 0px 10px #0000004f !important ';
        } 

        input.onblur = (e) => {
            document.querySelector("#input-container").style.cssText ='background: #3F3E4A !important'
        } 


// Question / Réponse
const sendBtn = document.querySelector("#send-btn");
const homeSection = document.querySelector("#home")
const QAsection = document.createElement("section")
QAsection.id = "qa-section"
QAsection.style.cssText = "height:80vh; overflow: scroll"
document.querySelector('#input-section').before(QAsection)
let punctuation = 0

function randomV(){
  var punctuations = ["!", "?", "!!!", "?!", ".", "...", "?????", "!!!!!!!!!"];
  var random = Math.floor(Math.random() * punctuations.length);
  var randomValue = punctuations[random];
  punctuation = randomValue 
  return punctuation
}

const tab = [
  { question: "Qui a toujours faim ?", answer: "Théo" },
  {
    question: "Ma soeur avait la moitié de mon âge quand j'avais 20 ans. J'ai maintenant 40 ans. Quel âge a ma soeur ?",
    answer:
      "Si ta soeur avait la moitié de ton âge quand tu avais 20ans, et que tu as maintenant 40ans. Elle a 20/2 +20= 30ans. ",
  },
  {
    question: "Quelle est la température du zéro absolu ?",
    answer:
     "Le zéro absolu correspond à -273,15 degrés celsius ou 0 kelvin.",
  },
  { question: "Qui a toujours une blague en tête?",
   answer:
    "Vianney"
  },
  {
    question: "Quelle est la recette du tiramisu ?",
    answer:
      "Pour 4 personnes, il faut 250 grammes de mascarpone, 100 grammes de sucre, 2 cuillères à soupes d'amaretto, 3 oeufs, 20 centilitres de café fort, 20 biscuits cuillères et de la poudre de cacao. Premièrement, Fouettez 3 jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse et devienne mousseux. Ajoutez ensuite le mascarpone puis mélangez jusqu'à ce que le résultat soit bien homogène. Deuxièmement, Montez 3 blancs en neige ferme en y ajoutant une pincée de sel, puis mélangez-les à la crème au mascarpone. Mélangez délicatement de haut en bas avec une spatule en silicone. Troisièmement, Préparez une grande tasse de café fort et ajoutez-y l'amaretto. Quatrièmement, étalez une couche de crème au mascarpone au fond du plat, puis placez une couche de biscuits légèrement imbibés de café à l'amaretto.Pour finir, répétez l'opération en terminant par une couche de crème au mascarpone que vous saupoudrez de poudre de cacao amer ou de copeaux de chocolat. Placez au frais pour au moins 3 heures.",
  },
  {
    question: "Envoie-moi un lien vers le top 10 des plus grands joueurs de foot de l'histoire.",
    answer:
      "Bien sûr, voici le lien que tu demandes : https://www.lequotidiendusport.fr/classement-les-dix-meilleurs-joueurs-de-tous-les-temps/",
  },
  {
    question: "Quelle guerre a été la plus meurtrière entre la première et la deuxième guerre mondiale ?",
    answer:
      "La Seconde Guerre mondiale fut le conflit le plus meurtrier de l'Histoire avec plus de 60 millions de morts soit 2,5% de la population mondiale de l'époque dont la majorité fut des civils. Les tableaux suivants détaillent les pertes de chaque pays.Globalement, les estimations des historiens varient de 50 millions à 85 millions de morts. Ces valeurs ne prennent pas en considération les morts de carences, privations, de suites de blessures, ou autres maladies consécutives au conflit, après mai 1945, en Europe, et septembre 1945, en Asie. ",
  },
  {
    question: "Comment calculer l'hypothenuse ?",
    answer:
      "A au carré + B au carré = hypothénuse au carré. Faire un shéma ou une image?",
  },
  {
    question: "C'est quoi le zéro absolu ?",
    answer:
      "Il s'agit de la température la plus basse en dessous de laquelle il est impossible de descendre.",
  },
];

console.log(tab.length)

function chatAnswer(e) {
  e.preventDefault();
  // Disparition de la page d'accueil
  homeSection.style.display = "none"

  // Création de la div container de la question
  const questionDiv = document.createElement("div");
  questionDiv.id = "#question"
  questionDiv.style.cssText = "background : #353540  !important; display: flex; justify-content: space-between; align-items: start; font-size: 20px !important"
  QAsection.appendChild(questionDiv)

  // Création de la div container de la réponse
  const answerDiv = document.createElement("div");
  answerDiv.id = "#answer"
  answerDiv.style.cssText = "background : #444653 !important; display: flex; justify-content: space-between; align-items: start"
  QAsection.appendChild(answerDiv)

  if (grootBox.checked) {
    // Groot
    
    randomV()
   
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5f9c186305e769c7ae49bd7ed601aa4~c5_720x720.jpeg?x-expires=1674032400&x-signature=Xo7N9Nq8b6oKPLexshs1XorTUSI%3D"/></div><p class="col-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
    answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5f9c186305e769c7ae49bd7ed601aa4~c5_720x720.jpeg?x-expires=1674032400&x-signature=Xo7N9Nq8b6oKPLexshs1XorTUSI%3D"/></div><p class="col-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${"Je suis Groot" + punctuation}</p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
    input.value = ""
  } else {
  if (!input.value == "") {

    console.log(input);
    for (let i = 0; i < tab.length; i++) {
      console.log(tab[i].question)
      if (tab[i].question == input.value) {
        questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5f9c186305e769c7ae49bd7ed601aa4~c5_720x720.jpeg?x-expires=1674032400&x-signature=Xo7N9Nq8b6oKPLexshs1XorTUSI%3D"/></div><p class="col-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${tab[i].question}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
        answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5f9c186305e769c7ae49bd7ed601aa4~c5_720x720.jpeg?x-expires=1674032400&x-signature=Xo7N9Nq8b6oKPLexshs1XorTUSI%3D"/></div><p class="col-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${tab[i].answer}</p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
        break;
      } else {
        questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5f9c186305e769c7ae49bd7ed601aa4~c5_720x720.jpeg?x-expires=1674032400&x-signature=Xo7N9Nq8b6oKPLexshs1XorTUSI%3D"/></div><p class="col-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
        answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5f9c186305e769c7ae49bd7ed601aa4~c5_720x720.jpeg?x-expires=1674032400&x-signature=Xo7N9Nq8b6oKPLexshs1XorTUSI%3D"/></div><p class="col-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">Désolé je ne sais pas répondre à votre question</p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
      }
    }

  } else {
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5f9c186305e769c7ae49bd7ed601aa4~c5_720x720.jpeg?x-expires=1674032400&x-signature=Xo7N9Nq8b6oKPLexshs1XorTUSI%3D"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">...</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
    answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f5f9c186305e769c7ae49bd7ed601aa4~c5_720x720.jpeg?x-expires=1674032400&x-signature=Xo7N9Nq8b6oKPLexshs1XorTUSI%3D"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">Vous n'êtes pas très bavard...</p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
  }
}

}
sendBtn.addEventListener("click", chatAnswer);
