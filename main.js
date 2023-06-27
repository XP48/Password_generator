caract = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", ",", "?", ".", ";", ":", "/", "!", "§", "*", "-", "+", "&", "~", "#", "'", "{", "}", "(", ")", "[", "]", "_", "^", "¨", "$", "€", "°", "="]

function choice(liste) {
    return liste[Math.floor(Math.random() * liste.length)]
}

function aff_long() {
    document.getElementById('taille').value = document.getElementById('long').value
    generate()
}

function generate() {
    pass = []
    let i = 0;
    do {
        i += 1;
        pass.push(choice(caract));
    } while (i < document.getElementById('long').value);
    pass = pass.join('')
    document.getElementById('result').value = pass
    document.getElementById('copier').innerText = "Copier📝"

}

function copy() {
    document.querySelector("#result").select()
    document.querySelector("#result").setSelectionRange(0, 99999)
    document.execCommand("copy")
    document.getElementById('copier').innerText = "Copié ✅"
}

function effacer() {
    document.getElementById('result').value = ''
}
// console.log(document.getElementById('long').value)