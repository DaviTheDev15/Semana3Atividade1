
const numbers = [1,2,3,4,5]; //  Aqui foi criada uma arrayList de números

// Aqui dá erro pois arr não foi declarada em nenhum momento do código
// const output = arr.map((x)=>{
//   return x * 2;  
// });

//Versão corrigida

// output é uma nova arrayList que irá receber os valores de numeros vezes 2
const output = numbers.map((x)=>{
    return x * 2;  
  });

// Aqui estava sendo mostrado a váriavel numbers, mas acredito que a ideia é mostrar a output
console.log(output);


//Esse algoritmo é capaz de retornar uma nova lista com o valor dobrado   