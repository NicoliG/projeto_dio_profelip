let nomeHeroi ="Sapo"
let vitorias = "555"
let derrotas ="5"
let nivel 
let total = vitorias - derrotas

function saldoVitoriDerrota(vitorias, derrotas){
  return total
}

if (vitorias <= 10) {
nivel = "Ferro";
}else if  (vitorias >=11 && vitorias <= 20 ){
   nivel= "Bronze";
}else if (vitorias >= 21 && vitorias <= 50) {
nivel= "Prata";
} else if (vitorias >=51  && vitorias <= 80){
   nivel= "Ouro";
} else if (vitorias >=81 && vitorias <=90){
   nivel= "Diamante";
} else if (vitorias >=91 && vitorias <= 100){
   nivel= "Lendário";
}else if ( vitorias >= 101)
   nivel= "Imortal";
console.log("Nome = " +nomeHeroi,
  " Vitorias= " + vitorias,
 "Derrotas= " + derrotas)
console.log("O Herói de nome "+ nomeHeroi, "tem o saldo de " + total, "vitórias, e está no nível " + nivel )

