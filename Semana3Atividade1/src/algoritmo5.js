const users=[
    {firstName:"john", lastName:"colben", age:26},
    {firstName:"jimmy", lastName:"fred", age:75},
    {firstName:"sam", lastName:"boston", age:50},
    {firstName:"ronald", lastName:"bristh", age:26},   
  ]; //Aqui foi criado uma arrayList de objetos

// Aqui a função map foi usado para concatenar o atributo firstName com o atributo lastName
const output = users.map((x)=> x.firstName+" "+x.lastName);

//Aqui foi mostrado o valor de output
console.log(output);

//Esse algoritmo retorna dada uma arrayList de objetos, o nome e o sobrenome concatenados
