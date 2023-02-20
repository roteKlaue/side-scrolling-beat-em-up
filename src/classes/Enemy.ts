import Entity from "./Entity";
import EnemyAttibutes from "../Interfaces/enemyInfo";
import position from "../Interfaces/Position";
import attributes from "../Interfaces/attributes";
import Player from "./Player";

export default abstract class extends Entity {
    type: "boss" | "lackey" | "miniboss";
    constructor(attributes: EnemyAttibutes) {
        super(attributes as position, attributes as attributes);
        this.type = attributes.type;
    }

    abstract onCloseToPlayer(player: Player, distance: Number): void;
}