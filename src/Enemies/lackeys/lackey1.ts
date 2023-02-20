import Attack from "../../classes/Attack";
import Enemy from "../../classes/Enemy";
import Player from "../../classes/Player";

export default class extends Enemy {
    onCloseToPlayer(player: Player, distance: Number): void {
        if(distance < 2) {
            this.attack(player, new Attack(20));
        }
    }
    
    move() {
        throw new Error("Method not implemented.");
    }
}