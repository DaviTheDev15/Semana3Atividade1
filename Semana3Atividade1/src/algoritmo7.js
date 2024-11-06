//o Erro aqui era que possuia :: ao invés de apenas :
let estudantes =[
    {nome:"João", idade:15},
    {nome:"Maria", idade:20},
    {nome:"Felipe", idade:22},
    {nome:"Pedro", idade:12},
    {nome:"Joana", idade:18},
   ];
const details = estudantes.filter((x)=> x.idade >= 18); // Cria uma nova lista apenas com estudantes com mais de 18
console.log(details.length);

//Esse algoritmo retorna o tamanho da lista details
   