const numeros = [1,2,3,4,5]; // Aqui foi criada uma arrayList de números

// Aqui foi criada uma função que recebe um número e retorna o dobro do mesmo
let calcularDobro = (numero) => numero * 2 

// Aqui foi criada uma nova arrayList que irá receber os valores de numeros vezes 2
// Para isso é utilizado a função map para percorrer a lista e retornar uma nova lista do mesmo tamanho
// E se utiliza a função calcularDobro para retornar o dobro do valor iterado
const numerosDobro = numeros.map(calcularDobro);

console.log(numerosDobro); // Mostra a lista

//Esse algoritmo é capaz de retornar uma nova lista com o valor dobrado     
