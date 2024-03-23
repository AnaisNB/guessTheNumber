const answer = document.querySelector(".answer");
const resetButton = document.getElementById("resetButton");
const input = document.querySelector("input[name='user_guess']");
const form = document.getElementById("form");

const displayAnswer = (message) => {
  answer.textContent = message;
};

const findTheNumber = () => {
  let targetNumber = Math.floor(Math.random() * 101);
  let nombreEssai = 0;

  const gererEnvoi = (e) => {
    e.preventDefault();
    const nombreUser = parseInt(input.value);
    nombreEssai++;

    if (isNaN(nombreUser) || nombreUser < 0 || nombreUser > 100) {
      displayAnswer("Tu dois choisir un nombre compris entre 0 et 100");
      return;
    }

    if (nombreUser === targetNumber) {
      displayAnswer(
        `Félicitations ! Le nombre était bien ${targetNumber}, vous l'avez trouvé en ${nombreEssai} essai(s) ! 🎉`
      );
    } else if (nombreUser > targetNumber) {
      displayAnswer(
        `Votre nombre est trop grand. Nombre d'essai(s) : ${nombreEssai}`
      );
    } else {
      displayAnswer(
        `Votre nombre est trop petit. Nombre d'essai(s) : ${nombreEssai}`
      );
    }
    input.value = "";
  };

  form.addEventListener("submit", gererEnvoi);

  resetButton.addEventListener("click", () => {
    displayAnswer("");
    nombreEssai = 0;
    targetNumber = Math.floor(Math.random() * 101);
  });
};

findTheNumber();
