let vitorias = Math.round(Math.random()*180);
let derrotas = Math.round(Math.random()*150);

let saldo = saldoVitorias(vitorias, derrotas);
let nivel = nivelJogador(saldo);

console.log(`O herói tem de saldo ${saldo} está no nível de ${nivel}`);

function saldoVitorias (vitorias, derrotas) {
    let saldo = vitorias - derrotas;

    return saldo;
}

function nivelJogador (saldo) {
    let ret = "";
    
    if(saldo <= 10) {
        ret = "Ferro";
    } else if(saldo > 10 && saldo <= 20) {
        ret = "Bronze";
    } else if(saldo > 20 && saldo <= 50) {
        ret = "Prata";
    } else if(saldo > 50 && saldo <= 80) {
        ret = "Ouro";
    } else if(saldo > 80 && saldo <= 90) {
        ret = "Diamante";
    } else if(saldo > 90 && saldo <= 100) {
        ret = "Lendário";
    }  else {
        ret = "Imortal";
    }

    return ret;
}