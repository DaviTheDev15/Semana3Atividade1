const numbers = [1,2,3,4,5]; //  Aqui foi criada uma arrayList de números

// Aqui há um erro de sintaxe onde se fecha {}(chaves), mas não abre
// const isOdd = (x) =>  return x % 2; 
// }

//Versão corrigida
const isOdd = (x) =>  {return x % 2;
}
//Essa função recebe x e retorna o resto de x por 2

// Aqui dá erro pois arr não foi declarada em nenhum momento do código
// const output = arr.filter(isOdd);

//Versão corrigida
const output = numbers.filter(isOdd);
 // Aqui se utiliza da função filter para criar uma nova lista filtrada
// Nesse caso essa nova lista só irá conter os valores impares da lista numbers
// Foi utilizado a função isOdd para verificar se era par ou impar



//Mostra o valor de output
console.log(output);

//Esse algoritmo retorna uma lista que possui apenas números impare


