//metodo de limpeza e validação 

const email ="  fiap@email.com    ";
const emaillimp = email.trim(); //remove espaços 
console.log(emaillimp)

//Validar: verifica se o dominio é valido


if(emaillimp.includes("@")){
    console.log("email válido")
}else{
    console.log("Email Inválido")
}

//métodos de transformação de texto (split, tolowcase, join)

const tituloartigo = "aprendendo javascript RAIZ";

const texto1 = tituloartigo.toLowerCase();
console.log(texto1);

const texto1_upper = tituloartigo.toUpperCase();
console.log(texto1_upper);

//transforma um texto em array(lista)
const texto2 = tituloartigo.split(" ");
console.log(texto2);

//o join faz o inverso, ele junta tudo em uma unica string
const texto3 = texto2.join(" | ");
console.log(texto3);

//metodo tofixed

const precoproduto = 199.99;
const desconto = 0.15;
const precofinal = precoproduto * (1 - desconto);
console.log(precofinal);
console.log(`R$ ${precofinal.toFixed(2)}`)

//Dom document object model
// permite o javascript conversar com o navegador 
//para manipular o html e css

const titulo = document.getElementById("titulo");
titulo.innerText ="D.O.M transformando o texto";
titulo.style.color="blue";

const produtos = [
    {nome:"Teclado Gamer",preco:200,empromocao:true},
    {nome:"Mouse Gamer",preco:150,empromocao:false},
    {nome:"Monitor",preco:1300,empromocao:true},
    {nome:"Padmouse",preco:50,empromocao:false},
];

const container =document.getElementById("lista-produtos");

function produtoscard(lista){
    const htmlprodutos= lista.map(item => ` 
        <div class="card">
            <h3>${item.nome}</h3> 
            <p>Preço R$ ${item.preco}</p>
            ${item.empromocao ? '<span>Promoção</span>': ''}
        </div>
        `).join('');//transforma o array em uma unica string

        container.innerHTML=htmlprodutos;
}
produtoscard(produtos);