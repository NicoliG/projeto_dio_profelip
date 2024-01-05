class Heroi {
    constructor(nomeHeroi, idade, tipoHeroi) {
      this.nomeHeroi = nomeHeroi;
      this.idade = idade;
      this.tipoHeroi = tipoHeroi;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipoHeroi) {
        case "mago":
          ataque = "magia";
          break;
        case "guerreiro":
          ataque = "espada";
          break;
        case "monge":
          ataque = "artes marciais";
          break;
        case "ninja":
          ataque = "shuriken";
          break;
      }
  
      console.log("O " + this.tipoHeroi + " atacou usando " + ataque);
    }
  }
  