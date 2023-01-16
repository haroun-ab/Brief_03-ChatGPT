var sendBtn = document.querySelector("#send");
var userQuestion = document.querySelector("#userQuestion");
var insertAnswer = document.querySelector("#answer");
var grootBox = document.querySelector("#grootBox");
var punctuation = ["!", "?", "!!!", "?!", ".", "...", "?????", "!!!!!!!!!"];
var random = Math.floor(Math.random() * punctuation.length);
var randomValue = punctuation[random];

var tab = [
  { question: "qui a toujours faim ?", answer: "Théo" },
  {
    question:
      "Ma soeur avait la moitié de mon âge quand j'avais 20 ans. J'ai maintenant 40 ans. Quel âge a ma soeur ?",
    answer:
      "Si ta soeur avait la moitié de ton âge quand tu avais 20ans, et que tu as maintenant 40ans. Elle a 20/2 +20= 30ans. ",
  },
  {
    question: "Quelle est la température du zéro absolu ?",
    answer: "Le zéro absolu correspond à -273,15 degrés celsius ou 0 kelvin.",
  },
  { question: "Qui a toujours une blague en tête?", answer: "Vianney" },
  {
    question: "Quelle est la recette du tiramisu ?",
    answer:
      "Pour 4 personnes, il faut 250 grammes de mascarpone, 100 grammes de sucre, 2 cuillères à soupes d'amaretto, 3 oeufs, 20 centilitres de café fort, 20 biscuits cuillères et de la poudre de cacao. Premièrement, Fouettez 3 jaunes d'œufs avec le sucre jusqu'à ce que le mélange blanchisse et devienne mousseux. Ajoutez ensuite le mascarpone puis mélangez jusqu'à ce que le résultat soit bien homogène. Deuxièmement, Montez 3 blancs en neige ferme en y ajoutant une pincée de sel, puis mélangez-les à la crème au mascarpone. Mélangez délicatement de haut en bas avec une spatule en silicone. Troisièmement, Préparez une grande tasse de café fort et ajoutez-y l'amaretto. Quatrièmement, étalez une couche de crème au mascarpone au fond du plat, puis placez une couche de biscuits légèrement imbibés de café à l'amaretto.Pour finir, répétez l'opération en terminant par une couche de crème au mascarpone que vous saupoudrez de poudre de cacao amer ou de copeaux de chocolat. Placez au frais pour au moins 3 heures.",
  },
  {
    question:
      "Envoie-moi un lien vers le top 10 des plus grands joueurs de foot de l'histoire.",
    answer:
      'Bien sûr, voici le lien que tu demandes : <a href="https://www.lequotidiendusport.fr/classement-les-dix-meilleurs-joueurs-de-tous-les-temps/"> Les meilleurs joueurs <a>',
  },
  {
    question:
      "Quelle guerre a été la plus meurtrière entre la première et la deuxième guerre mondiale ?",
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

function chatAnswer(e) {
  e.preventDefault();
  if (grootBox.checked) {
    insertAnswer.innerHTML = "Je suis Groot" + randomValue;
  } else {
    if (!userQuestion.value == "") {
      for (let i = 0; i < tab.length; i++) {
        if (userQuestion.value == tab[i].question) {
          insertAnswer.innerHTML = tab[i].answer;
          break;
        } else {
          insertAnswer.innerHTML =
            "Désolé je ne sais pas répondre à votre question";
        }
      }
    } else {
      insertAnswer.innerHTML = "Vous n'êtes pas très bavard...";
    }
  }
}

sendBtn.addEventListener("click", chatAnswer);
