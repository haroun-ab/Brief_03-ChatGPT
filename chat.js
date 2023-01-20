//Effet hover input
const input = document.querySelector("#input");
let isFocus = "";
input.onfocus = () => {
  document.querySelector("#input-container").style.cssText =
    "background: #434250 !important; box-shadow: 0px 0px 10px #0000004f !important ";
};

input.onblur = () => {
  document.querySelector("#input-container").style.cssText =
    "background: #3F3E4A !important";
};

// Question / Réponse
const sendBtn = document.querySelector("#send-btn");
const homeSection = document.querySelector("#home");
const QAsection = document.createElement("section");
document.querySelector("#top").appendChild(QAsection);

QAsection.id = "qa-section";

// document.querySelector('#input-section').before(QAsection)
let punctuation = 0;

function randomPunctuation() {
  var punctuations = ["!", "?", "!!!", "?!", ".", "...", "?????", "!!!!!!!!!"];
  var random = Math.floor(Math.random() * punctuations.length);
  var randomValue = punctuations[random];
  punctuation = randomValue;
  return punctuation;
}

const tab = [
  { question: "Qui a toujours faim ?", answer: "Théo." },
  {
    question:
      "Ma soeur avait la moitié de mon âge quand j'avais 20 ans. J'ai maintenant 40 ans. Quel âge a ma soeur ?",
    answer:
      "Si ta soeur avait la moitié de ton âge quand tu avais 20 ans, et que tu as maintenant 40 ans, elle a 30 ans. En effet : 20/2 + 20 = 30. ",
  },
  {
    question: "Quelle est la température du zéro absolu ?",
    answer: "Le zéro absolu correspond à -273,15 degrés celsius ou 0 kelvin.",
  },

  { question: "Qui a toujours une blague en tête ?", answer: "Vianney." },

  {
    question: "Quelle est la recette du tiramisu ?",
    answer:
      "Pour 4 personnes, il faut 250 grammes de mascarpone, 100 grammes de sucre, 2 cuillères à soupe d'amaretto, 3 oeufs, 20 centilitres de café fort, 20 biscuits cuillères et de la poudre de cacao. Premièrement, fouettez 3 jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse et devienne mousseux. Ajoutez ensuite le mascarpone puis mélangez jusqu'à ce que le résultat soit bien homogène. Deuxièmement, Montez 3 blancs en neige ferme en y ajoutant une pincée de sel, puis mélangez-les à la crème au mascarpone. Mélangez délicatement de haut en bas avec une spatule en silicone. Troisièmement, Préparez une grande tasse de café fort et ajoutez-y l'amaretto. Quatrièmement, étalez une couche de crème au mascarpone au fond du plat, puis placez une couche de biscuits légèrement imbibés de café à l'amaretto.Pour finir, répétez l'opération en terminant par une couche de crème au mascarpone que vous saupoudrez de poudre de cacao amer ou de copeaux de chocolat. Placez au frais pour au moins 3 heures.",
  },
  {
    question:
      "Envoie-moi un lien vers le top 10 des plus grands joueurs de foot de l'histoire.",
    answer:
      "Bien sûr, voici le lien que tu demandes : <a href='https://www.lequotidiendusport.fr/classement-les-dix-meilleurs-joueurs-de-tous-les-temps/'>les dix meilleurs joueurs </a>.",
  },
  {
    question:
      "Quelle guerre a été la plus meurtrière entre la première et la deuxième guerre mondiale ?",
    answer:

      "La Seconde Guerre mondiale fut le conflit le plus meurtrier de l'Histoire avec plus de 60 millions de morts soit 2,5% de la population mondiale de l'époque dont la majorité fut des civils.Globalement, les estimations des historiens varient de 50 millions à 85 millions de morts. Ces valeurs ne prennent pas en considération les morts de carences, privations, de suites de blessures, ou autres maladies consécutives au conflit, après mai 1945, en Europe, et septembre 1945, en Asie. Les pertes humaines de la Première Guerre mondiale s'élèvent à environ 18,6 millions de morts. Ce nombre inclut 9,7 millions de morts pour les militaires et 8,9 millions pour les civils.",

  },
  {
    question: "Comment calculer l'hypoténuse ?",
    answer:
      "L’hypoténuse est le côté opposé à l’angle droit dans un triangle rectangle. Selon le théorème de Pythagore, si un triangle est rectangle, alors le carré de la longueur de l'hypoténuse est égal à la somme des carrés des longueurs des deux autres côtés. Soit le triangle ABC rectangle en A: BC au carré = AB au carré + AC au carré. L'hypoténuse sera donc la racine carrée de BC.",
  },
  {
    question: "C'est quoi le zéro absolu ?",
    answer:
      "Il s'agit de la température la plus basse en dessous de laquelle il est impossible de descendre.",
  },
];


function chatAnswer(e) {
  e.preventDefault();
  // Disparition de la page d'accueil
  homeSection.style.display = "none";


  // Création de la div container de la question (modif : className au lieu d'id = pour pouvoir compter les div)
  const questionDiv = document.createElement("div");
  questionDiv.className = "question";
  questionDiv.style.cssText =
    "background : #353540  !important; display: flex; justify-content: space-between; align-items: start; font-size: 20px !important";
  QAsection.appendChild(questionDiv);

  // Variable qui compte les div question pour pvr faire une boucle avec au moment de la création des div réponses, et ne pas les faire se répéter avec la boucle du tableau des questions/réponses
  numberDiv = document.querySelectorAll(".question").length;

  // Création de la div container de la réponse
  const answerDiv = document.createElement("div");
  answerDiv.className = "answer";
  answerDiv.style.cssText =
    "background : #444653 !important; display: flex; justify-content: space-between; align-items: start";
  QAsection.appendChild(answerDiv);


  sendBtn.addEventListener("click", function(){
    const topDiv = document.querySelector('#top')
    topDiv.scrollTop = topDiv.offsetHeight;
  })

  
  // Groot
  if (grootBox.checked) {
    randomPunctuation();
    if (!input.value == "") {
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
    answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="groot${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
      var typewriter = new Typewriter(`#groot${numberDiv}`, {
        cursor : ""
       });
    typewriter
      .changeDelay(50)
      .typeString(`Je s'appelle Groot ${punctuation}`)
      .start();
      
    } else {
      questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p  class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">...</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
      answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="groot${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
      var typewriter = new Typewriter(`#groot${numberDiv}` , {
        cursor : ""
       });
    typewriter
      .changeDelay(50)
      .typeString(`Je s'appelle Groot ${punctuation}`)
      .start();
    }
    input.value = "";
  } else {
  if (!input.value == "") 
  {

    for (let i = 0; i < tab.length; i++) {
      if (tab[i].question == input.value) {
        questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${tab[i].question}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
        answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="answer${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
        // Typewriter
          var typewriter = new Typewriter(`#answer${numberDiv}`, {
            cursor : ""
           });

          typewriter
            .changeDelay(50)
            .typeString(tab[i].answer)
            .start();
        break;
      } else {
        questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">${input.value}</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
        answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="sorry${numberDiv}"></p><div class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
         var typewriter = new Typewriter(`#sorry${numberDiv}`, {
          cursor : ""
         });
          typewriter
            .changeDelay(50)
            .typeString("Désolé, je ne sais pas répondre à votre question.")
            .start();
        }
      }
  } else {
    questionDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="https://i.pinimg.com/474x/46/72/f8/4672f876389036583190d93a71aa6cb2.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6">...</p><div class="col-2 col-sm-1 d-flex m-0 justify-content-start text-white-50 py-4 fs-7 ps-2"><i class="bi bi-pencil-square"></i></div>`;
    answerDiv.innerHTML = `<div class="col-1 d-flex justify-content-end m-0 py-4"><img class="rounded-1" height="25px" width="25px" src="./logo.jpg"/></div><p class="col-9 col-sm-10 px-4 px-lg-5 py-4 m-0 mt-1 fs-6" id="empty${numberDiv}"></p><div id="thumbs-div" class="col-2 col-sm-1 d-flex justify-content-start text-white-50 py-4"><i class="bi bi-hand-thumbs-up p-0 p-sm-1"></i><i class="bi bi-hand-thumbs-down p-0 p-sm-1 ps-1"></i></div>`;
   var typewriter = new Typewriter(`#empty${numberDiv}`, {
    cursor : ""
   });
      typewriter
        .changeDelay(50)
        .typeString("Vous n'êtes pas très bavard...")
        .start()
    }
  }

  let btnUp = false;
  let btnDown = false;

  const thumbsUp =  answerDiv.childNodes[2].childNodes[0]
  thumbsUp.onclick = () => {

    if(btnDown == true){
      btnUp = true;
      thumbsUp.style.cssText = "color: lightgreen !important"
      btnDown = false;
      thumbsDown.style.cssText = ""
    } else if(btnUp == true){
      btnUp = false;
      thumbsUp.style.cssText = "" 
    } else {
      btnUp = true;
      console.log('like')
      thumbsUp.style.cssText = "color: lightgreen !important" 
    }
  }

  const thumbsDown =  answerDiv.childNodes[2].childNodes[1]
  thumbsDown.onclick = () => {
    console.log("down")
    if(btnUp == true){
      btnDown = true;
      thumbsDown.style.cssText = "color: red !important"
      btnUp = false;
      thumbsUp.style.cssText = ""
    } else if(btnDown == true){
      btnDown = false;
      thumbsDown.style.cssText = "" 
    } else {
      btnDown = true;
      thumbsDown.style.cssText = "color: red !important"
    }
  }

  input.value = ""
  }

sendBtn.addEventListener("click", chatAnswer);

