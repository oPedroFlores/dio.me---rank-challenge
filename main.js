/*
  Author: Pedro Flores
  Date: 30/10/2022
  Description: Projeto para Dio.me do bootcamp para mostrar em qual rank um herói está de acordo com a quantidade de vitorias.
*/

const rankingTable = {
  Ferro: 9,
  Bronze: 20,
  Prata: 50,
  Ouro: 80,
  Diamante: 90,
  Platina: 100,
  Imortal: Infinity,
};

class Heroi {
  constructor(victories) {
    this.victories = victories;
  }

  classify() {
    for (let rank in rankingTable) {
      if (rankingTable[rank] >= this.victories) {
        return rank;
      }
    }
  }

  getRank() {
    return console.log(
      `O Herói tem de saldo de ${
        this.victories
      } está no nível de ${this.classify()}`,
    );
  }
}

const heroi = new Heroi(100);
heroi.getRank();
