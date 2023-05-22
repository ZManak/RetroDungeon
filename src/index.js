console.log("Script linked");

class Player {
  hp = 100;
  xp = 0;
  gold = 50;
  damage = 0;
  inventory = [];

  attack(target) {
    target.hp = -player.attack - target.defense;
  }
}

class warrior extends Player {}

class enemy {
  constructor(hp, damage, defense, goldDrop, xpDrop, loot) {
    hp = this.hp;
    this.damage = damage;
    this.defense = defense;
  }
  attack(target) {
    target.hp -= this.damage;
    console.log(`Did ${this.damage}`);
  }
}

const p1 = new Player();
const goblin = new enemy(10, 3, 0, 30, 5, []);

goblin.attack(p1);

console.log(`P1 has ${p1.hp}`);
