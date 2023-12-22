class hero {
  nome;
  idade;
  tipo;

    constructor(idade, tipo, name) {
      this.name = name;
      this.idade = idade;
      this.tipo = tipo;
    }
  attack() {
    let ataque;

    switch (this.tipo) {
      case "mago":
        ataque = "usou magia";
        break;
      case "guerreiro":
        ataque = "usou espada";
        break;
      case "monge":
        ataque = "usou artes marciais";
        break;
      case "ninja":
        ataque = "usou shuriken";
        break;
      default: 
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`)
  }
}


let heroi = new hero(23, "mago");
heroi.attack();