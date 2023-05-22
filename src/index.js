console.log("Script linked");

class Player {
  constructor(hp, xp, gold, damage, inventory) {
    this.hp = hp;
    this.xp = xp;
    this.gold = gold;
    this.damage = damage;
    this.inventory = inventory;
  }

  attack(target) {
    if (target.defense > Player.damage) {
      target.hp -= 0;
    } else {
      target.hp -=
        Math.floor(
          Math.random() * (Player.damage - Player.damage * 0.9 + 1) +
            Player.damage * 0.9
        ) - target.defense;
    }
  }

  levelUp() {
    if (this.xp >= 100) {
      this.hp = +10;
      this.xp = -100;
      this.damage = +1;
    } else {
      console.log("Not enough XP");
    }
  }
}

class warrior extends Player {}

class enemy {
  constructor(hp, damage, defense, goldDrop, xpDrop, loot) {
    this.hp = hp;
    this.damage = damage;
    this.defense = defense;
  }

  attack(target) {
    let damageDealt = this.damage * (Math.random() * (1.1 - 0.9 + 1) + 0.9);

    if (target.defense > this.damage) {
      console.log("No damage");
    } else {
      target.hp -= damageDealt.toFixed(2);
      console.log("Damage dealt to target is: " + damageDealt.toFixed(2));
      console.log(`P1 has ${target.hp.toFixed(2)} HP left`);
    }
  }
}

const p1 = new Player(100, 0, 0, 10, []);
console.log(p1);
const goblin = new enemy(10, 3, 0, 30, 5, []);

goblin.attack(p1);
goblin.attack(p1);
