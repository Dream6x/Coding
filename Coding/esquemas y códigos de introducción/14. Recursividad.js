//  Recursividad
// Cálculo factorial de un número entero
// Factorial de 5 = 5 * 4 * 3 * 2 * 1 = 120∏

// Función NO recursiva -> Tiene un estado interno (en este caso la variable fact que es la que devolvemos al final)
// Programación estructurada
function factorial(num){
    let fact = num
    for (let i = num - 1; i > 0; i = i - 1) {
        fact = fact * i
    }
    return fact
}

console.log(factorial(5))

//Programación funcional, donde se hace uso de la recursividad
function factorial_rec(num){
    if (num === 1) return 1
    return num * factorial_rec(num - 1)
}

console.log(factorial_rec(5))