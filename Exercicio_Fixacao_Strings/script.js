const nome = prompt("Digite seu nome: ");
const email = prompt("Digite seu email: ");
const tamanhoNome = nome.length
const frase = `O e-mail: ${email} foi cadastrado com sucesso.\nBoas Vindas ${nome} \n${nome}:Seu nome possui: ${tamanhoNome} caracteres`
window.alert(frase);

const subLetraR = frase.replaceAll("r","l");
window.alert(`Substituido as letras R por L: ${subLetraR}`);

const verifEmail = email.includes("@");
window.alert(`O e-mail cadastrado possui @ ? :  ${verifEmail}` );