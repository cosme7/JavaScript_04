//1 - crie uma função que exiba uma mensagem no console
function message(){
    console.log(`EIIIIIII PSIU!`);
}
message();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function myName(name){
    console.log (name);
}
myName(`Cosme`);

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function information(nome, idade, música){
    console.log(`My Name: ${nome}, Age: ${idade}, Music Estyle: ${música}`);
}
information(`Cosme`, `30`, `Eclético`);

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function fun(movie, music){
    console.log(`Movie: ${movie}, Music Name: ${music}`);
}
fun(`Koe no Katachi`,`Only Lonely - Bon Jovi`);

console.log(`>>>> BÔNUS <<<<`)
//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triple(number){
    return number * 3;
}
let result = triple(2);
    console.log(`Calculation Result: ${result}`);

