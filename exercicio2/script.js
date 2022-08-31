// # Exercício 2

// Observe a string abaixo.


const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;

let minhaNovaString = minhaString.trim()

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log("A quantidade de caracteres antes da remoção era de "+minhaString.length+", mas agora é de "+minhaNovaString.length)

// c) Substitua os traços `________` por “sticioso”.

minhaNovaString = minhaNovaString.replace("________","sticioso")
console.log(minhaNovaString)