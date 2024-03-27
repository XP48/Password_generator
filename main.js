const numericChars = "1234567890";
const alphabeticChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialChars = ",?.;:/!§*-+&~#'{}()[]_^¨$€°=";
let allChars = [...numericChars, ...alphabeticChars, ...specialChars];

const getRandomItem = (list) => list[Math.floor(Math.random() * list.length)];

const updatePasswordLength = () => {
  document.getElementById("taille").innerText =
    document.getElementById("long").value;
  generatePassword();
};

const generatePassword = () => {
  allChars = alphabeticChars;
  if (document.getElementById("chiffres").checked) {
    allChars += numericChars;
  }
  if (document.getElementById("caracteresSpeciaux").checked) {
    allChars += specialChars;
  }
  allChars = [...allChars];

  const length = document.getElementById("long").value;
  const password = Array.from({ length }, () => getRandomItem(allChars)).join(
    ""
  );

  document.getElementById("result").value = password;
  document.getElementById("copier").innerText = "Copier📝";
  document.getElementById("copier").classList.remove("error");
};

const copyToClipboard = async () => {
  const password = document.querySelector("#result").value;

  try {
    if (!password) {
      throw new Error("Le mot de passe est vide");
    }

    await navigator.clipboard.writeText(password);
    document.getElementById("copier").innerText = "Copié ✅";
    setTimeout(() => {
      document.getElementById("copier").innerText = "Copier📝";
    }, 3000);
  } catch (error) {
    document.getElementById("copier").innerText = "Erreur ❌";
    document.getElementById("copier").classList.add("error");
    setTimeout(() => {
      document.getElementById("copier").classList.remove("error");
      document.getElementById("copier").innerText = "Copier📝";
    }, 3000);
  }
};

const clearPassword = () => {
  document.getElementById("result").value = "";
};

window.onload = () => {
  updatePasswordLength();
};
