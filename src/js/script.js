//Metódo de limpeza de validação

const email ="   fiap@email.com    ";
const emailLimpo= email.trim(); //remove espaços (Início e fim)
console.log(emailLimpo)

// Validar:Verifica se o domínio é válido 

if (emailLimpo.includes("@")){
    console.log ('email válido')
}else{
    console.log("email inválido")
}

//Método de transformação de texto (split, tollowCase, Join)

const tituloArtigo= "Aprendendo JavaScript RAIZ DEV"

const texto1= tituloArtigo.split(" ");
console.log(texto1)

const texto2= tituloArtigo.toLowerCase();
console.log(texto2);

const texto3 =tituloArtigo.toUpperCase();
console.log(texto3);

//o join faz o inverso ,ele junta tudo em uma unica string
const texto4 = texto1.join("*")
console.log(texto4)
