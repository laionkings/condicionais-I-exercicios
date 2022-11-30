let idade = +(prompt("Qual a sua idade?"));
let ensinoMedio = confirm(prompt("Você terminou o ensino médio"));
let faculdade = confirm(prompt("Você está cursando uma faculdade?"));

const verificar = (idade, ensinoMedio, faculdade) => {
    if(idade => 18){
        alert("Você é de maior")
    }else{
        alert("Você não é de maior")
    }
    if(ensinoMedio == true){
        alert("Parabéns você está apto a fazer uma faculdade!")
    }else{
        alert("Não pode fazer uma faculdade")
    }
    if(faculdade == false) {
        alert("Você não está cursando uma faculdade")
    }else{
        alert("Você está cursando uma faculdade")
    }

   
}

verificar()